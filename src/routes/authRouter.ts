import { Router } from "express";
import { authLoggedController } from "../controllers/auth/auth-logged";
import { authSigninController } from "../controllers/auth/auth-signin";
import { authMiddlewares } from "../middlewares/auth-middlewares";
import { validationSchemaMiddlewares } from "../middlewares/schemas-middlewares";
import { ValidationSigninAuthUser } from "../schemas/validation/signin-auth-user";

export const authRouter = Router();

// authRouter.post("/sigup", validationSchemaMiddlewares(ValidationSignupAuthUser), authSignupController);
authRouter.post("/signin", validationSchemaMiddlewares(ValidationSigninAuthUser), authSigninController);
authRouter.get("/me", authMiddlewares, authLoggedController);
