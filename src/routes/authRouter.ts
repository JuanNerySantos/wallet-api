import { Router } from "express";
import { authSignupController } from "../controllers/auth/auth-signup";

export const authRouter = Router();

authRouter.post("/sigup", authSignupController);
// authRouter.post("/signin", authSigninController);
