import { Request, Response } from "express";
import { authSignupService } from "../../service/auth/auth-signup";
import { ErrorMiddlewares } from "../error/middlewares-error";

export async function authSignupController(req: Request, res: Response): Promise<void> {
  try {
    if (res.locals.error !== undefined) {
      throw new ErrorMiddlewares("error in validate middlewares");
    }

    const authParams = req.body;

    const { statusCode, body } = await authSignupService(authParams);

    res.status(statusCode).send(body);
    return;
  } catch (error) {
    if (error instanceof ErrorMiddlewares) {
      const existError = res.locals.error;
      res.status(existError.statusCode).send(existError.message);
      return;
    }
    console.error(error);
    res.status(500).send("Internal server error!");
    return;
  }
}
