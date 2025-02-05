import { Router } from "express";
import { authSigninController } from "../controllers/auth/auth-signin";
import { authSignupController } from "../controllers/auth/auth-signup";

export const authRouter = Router();

authRouter.post("/sigup", authSignupController);
authRouter.post("/signin", authSigninController);
