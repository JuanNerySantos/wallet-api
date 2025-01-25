import { Router } from "express";

export const authRouter = Router();

authRouter.post("/singup", authController.singup);
