import express from "express";
import controllers from "../controllers";

const oauthRoutes = express.Router();

oauthRoutes.post(
  "/token",
  controllers.oauth.validators.token,
  controllers.oauth.token
);

oauthRoutes.post("/resource", (req, res) => {
  res.send("Resource");
});

oauthRoutes.post(
  "/register",
  controllers.oauth.validators.register,
  controllers.oauth.register
);

export default oauthRoutes;
