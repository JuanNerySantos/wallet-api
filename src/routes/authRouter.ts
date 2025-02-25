import { Router } from "express";
import { authLoggedController } from "../controllers/auth/auth-logged";
import { authSigninController } from "../controllers/auth/auth-signin";
import { authSignupController } from "../controllers/auth/auth-signup";
import { authMiddlewares } from "../middlewares/auth-middlewares";

export const authRouter = Router();

authRouter.post("/sigup", authSignupController);
authRouter.post("/signin", authSigninController);
authRouter.get("/me", authMiddlewares, authLoggedController);
