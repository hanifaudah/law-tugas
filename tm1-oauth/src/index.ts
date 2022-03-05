import express from "express";
import "dotenv/config";

// routes
import rootRoutes from "./routes";

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use("/", rootRoutes);

app.listen(process.env.PORT || 3000);
