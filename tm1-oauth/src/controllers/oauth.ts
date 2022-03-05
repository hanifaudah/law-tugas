import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { header, body, validationResult } from "express-validator";
import { User, Token } from "../prisma/generated/client";
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
      return res.status(400).json({ error: errors.array() });
    }

    const { username, password } = req.body;

    // check if user exists
    const userExists =
      (await prisma.user.findUnique({ where: { username } })) !== null;
    if (userExists) {
      return res.status(400).json({ error: "user_exists" });
    }

    // hash password
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user: User = await prisma.user.create({
      data: { username, password: hashedPassword },
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
      return res.status(400).json({ error: errors.array() });
    }

    const { username, password, grant_type, client_id, client_secret } =
      req.body;

    // find user
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      return res.status(404).json({ error: "user does not exist" });
    }

    // validate password
    const passwordIsValid: Boolean = bcrypt.compareSync(
      password,
      user.password
    );
    if (passwordIsValid) {
      if (!process.env.SECRET) throw new Error("SECRET is undefined");

      const { token: accessToken }: Token = await prisma.token.create({
        data: {
          token: crypto.randomBytes(TOKEN_LENGTH_BYTES).toString("hex"),
          type: "access",
          userId: user.id,
        },
      });
      const { token: refreshToken }: Token = await prisma.token.create({
        data: {
          token: crypto.randomBytes(TOKEN_LENGTH_BYTES).toString("hex"),
          type: "refresh",
          userId: user.id,
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
        .json({ error: "invalid_request", message: "invalid password" });
    }
  } catch (error) {
    return res.status(500).json({ error: "server_error" });
  }
};

const resource = (req: Request, res: Response) => {
  try {
    // validate token
  } catch (error) {
    return res.status(500).json({ error: "server_error" });
  }
};

export default {
  register,
  token,
  validators,
};
