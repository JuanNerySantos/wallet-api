import { Router } from "express";
import { authLoggedController } from "../controllers/auth/auth-logged";
import { authSigninController } from "../controllers/auth/auth-signin";
import { authSignupController } from "../controllers/auth/auth-signup";
import { authMiddlewares } from "../middlewares/auth-middlewares";
import { validationSchemaMiddlewares } from "../middlewares/schemas-middlewares";
import { ValidationSigninAuthUser } from "../schemas/validation/signin-auth-user";
import { ValidationSignupAuthUser } from "../schemas/validation/signup-auth-user";

export const authRouter = Router();

authRouter.post("/signup", validationSchemaMiddlewares(ValidationSignupAuthUser), authSignupController);
authRouter.post("/signin", validationSchemaMiddlewares(ValidationSigninAuthUser), authSigninController);
authRouter.get("/me", authMiddlewares, authLoggedController);
