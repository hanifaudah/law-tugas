import { Request, Response } from "express";
import oauth from "./oauth";
import { header } from "express-validator";
import { prisma } from "../index";
import { Token, User } from "../../prisma/generated/client";

const middlewares = {
  validateToken: [
    header("content-type").equals("application/json"),
    header("authorization")
      .exists()
      .withMessage("no token provided")
      .matches(/^Bearer.*/),
    async (req: Request, res: Response, next: Function) => {
      try {
        const rawToken = req.header("authorization") || "";
        const accessToken: Token | null = await prisma.token.findUnique({
          where: {
            token: rawToken.split(" ")[1],
          },
        });
        const accessTokenCreationTime = accessToken?.createdAt?.getTime();
        if (accessToken && accessTokenCreationTime) {
          const now: Date = new Date();
          const tokenAgeSeconds: number =
            (now.getTime() - accessTokenCreationTime) / 1000;
          if (
            tokenAgeSeconds <
              (process.env.ACCESS_TOKEN_LIFETIME_SECONDS || 300) &&
            accessToken.type === "access"
          ) {
            const user: User | null = await prisma.user.findUnique({
              where: { id: accessToken.userId },
            });
            if (!user) {
              return res.status(401).json({
                error: "invalid_request",
                error_description: "invalid credentials",
              });
            }
            req.user = user;
            next();
          } else {
            return res.status(401).json({
              error: "invalid_token",
              error_description: "please use a valid access token",
            });
          }
        } else {
          return res.status(401).json({
            error: "invalid_token",
            error_description: "please use a valid access token",
          });
        }
      } catch (error) {
        return res.status(500).json({ error: "server_error" });
      }
    },
  ],
};

export default { oauth, middlewares };
