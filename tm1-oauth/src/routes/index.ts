import express from "express";

// routes
import oauthRoutes from "./oauth";

const rootRoutes = express.Router();
rootRoutes.use("/oauth", oauthRoutes);

export default rootRoutes;
