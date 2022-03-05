import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { header, body, validationResult } from "express-validator";
import { User } from "@prisma/client";

const prisma = new PrismaClient();

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
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  const SALT_ROUNDS = 10;

  const { username, password } = req.body;

  const userData: any = { username };

  bcrypt.hash(password, SALT_ROUNDS, async (err: any, hash: String) => {
    if (err) res.status(500).json({ error: "A server error occured" });
    userData.password = hash;
    try {
      const user: User = await prisma.user.create({ data: userData });
      const { password: _, ...cleanedData } = user;
      return res.status(201).json(cleanedData);
    } catch (error: any) {
      return res.status(400).json({ error: { code: error?.code } });
    }
  });
  return res.status(500);
};

const token = async (req: Request, res: Response): Promise<Response> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  const { username, password, grant_type, client_id, client_secret } = req.body;

  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) {
    return res.status(404).json({ error: "user does not exist" });
  }

  // validate password
  bcrypt.compare(user.password, password, (err, passwordIsValid: Boolean) => {
    if (err) res.status(500).json({ error: "A server error occured" });
    if (passwordIsValid) {
    }
  });
  console.log(user);

  return res.status(500);
};

export default {
  register,
  token,
  validators,
};
