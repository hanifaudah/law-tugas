import { User } from "./src/prisma/generated/client";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
