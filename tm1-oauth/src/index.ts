import express from "express";
import "dotenv/config";
import { PrismaClient } from "../prisma/generated/client";

// routes
import rootRoutes from "./routes";

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

console.log(process.env.B);

app.use("/", rootRoutes);

export const prisma = new PrismaClient();

app.listen(process.env.PORT || 3000);
