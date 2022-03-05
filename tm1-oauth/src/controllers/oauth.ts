import { Request, Response } from "express";
import { header, body, validationResult } from "express-validator";
import { User, Token, ClientApp } from "../../prisma/generated/client";
import crypto from "crypto";
import { prisma } from "../index";

const SALT_ROUNDS = 10;
const TOKEN_LENGTH_BYTES = 20;

const validators = {
  register: [
    body("username")
      .exists({ checkFalsy: true })
      .withMessage("username is required"),
    body("password")
      .exists({ checkFalsy: true })
      .withMessage("password is required"),
    body("full_name")
      .exists({ checkFalsy: true })
      .withMessage("full name is required"),
  ],
  token: [
    header("content-type").equals("application/x-www-form-urlencoded"),
    body("username").exists().withMessage("username is required"),
    body("password").exists().withMessage("password is required"),
    body("grant_type")
      .exists()
      .withMessage("grant_type is required")
      .equals("password")
      .withMessage("invalid grant type"),
    body("client_id").exists().withMessage("client_id is required"),
    body("client_secret").exists().withMessage("client_secret is required"),
  ],
};

const register = async (req: Request, res: Response): Promise<Response> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({
        error: "invalid_request",
        error_description: errors.array(),
      });
    }

    const { username, password, full_name } = req.body;

    // check if user exists
    const userExists =
      (await prisma.user.findUnique({ where: { username } })) !== null;
    if (userExists) {
      return res.status(400).json({ error: "user_exists" });
    }

    // hash password
    const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    const user: User = await prisma.user.create({
      data: { username, password: hashedPassword, fullName: full_name },
    });
    const { password: _, ...cleanedData } = user;
    return res.status(201).json(cleanedData);
  } catch (error) {
    return res.status(500).json({ error: { code: "server_error" } });
  }
};

const token = async (req: Request, res: Response): Promise<Response> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(401)
        .json({ error: "invalid_request", error_description: errors.array() });
    }

    const { username, password, grant_type, client_id, client_secret } =
      req.body;

    // validate client app
    const clientApp: ClientApp | null = await prisma.clientApp.findUnique({
      where: { clientId: client_id },
    });

    if (!clientApp) {
      return res.status(401).json({
        error: "invalid_request",
        error_description: "client id is invalid",
      });
    } else if (
      crypto.createHash("sha256").update(client_secret).digest("hex") !==
      clientApp.clientSecret
    ) {
      return res.status(401).json({
        error: "invalid_request",
        error_description: "client secret is invalid",
      });
    }

    // find user
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      return res.status(401).json({
        error: "invalid_request",
        error_description: "invalid credentials",
      });
    }

    // validate password
    // hash password
    const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    const passwordIsValid: Boolean = hashedPassword == user.password;
    if (passwordIsValid) {
      const { token: accessToken }: Token = await prisma.token.create({
        data: {
          token: crypto.randomBytes(TOKEN_LENGTH_BYTES).toString("hex"),
          type: "access",
          userId: user.id,
          clientId: clientApp.clientId,
        },
      });
      const { token: refreshToken }: Token = await prisma.token.create({
        data: {
          token: crypto.randomBytes(TOKEN_LENGTH_BYTES).toString("hex"),
          type: "refresh",
          userId: user.id,
          clientId: clientApp.clientId,
        },
      });
      return res.status(200).json({
        access_token: accessToken,
        expires_in: Number(process.env.ACCESS_TOKEN_LIFETIME_SECONDS || 300),
        token_type: "Bearer",
        scope: null,
        refresh_token: refreshToken,
      });
    } else {
      return res
        .status(401)
        .json({ error: "invalid_request", message: "invalid credentials" });
    }
  } catch (error) {
    return res.status(500).json({ error: "server_error" });
  }
};

const resource = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(401)
        .json({ error: "invalid_token", error_description: errors.array() });
    }
    const user = req.user;
    const rawToken = req.header("authorization") || "";
    const accessToken: Token | null = await prisma.token.findUnique({
      where: {
        token: rawToken.split(" ")[1],
      },
    });
    const refreshToken: Token | null = await prisma.token.findFirst({
      where: {
        user,
        AND: { type: "refresh", clientId: accessToken?.clientId },
      },
      orderBy: [{ createdAt: "desc" }],
    });
    return res.status(200).json({
      access_token: accessToken?.token,
      client_id: accessToken?.clientId,
      user_id: user?.id,
      full_name: user?.fullName,
      npm: "1906293070",
      expires: null,
      refresh_token: refreshToken?.token,
    });
  } catch (error) {
    return res.status(500).json({ error: "server_error" });
  }
};

export default {
  register,
  token,
  resource,
  validators,
};
