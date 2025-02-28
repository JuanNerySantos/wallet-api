import { Request, Response } from "express";
import { authSigninService } from "../../service/auth/auth-signin";
import { ErrorMiddlewares } from "../error/middlewares-error";

export async function authSigninController(req: Request, res: Response): Promise<void> {
  const params = req.body;
  try {
    if (res.locals.error !== undefined) {
      throw new ErrorMiddlewares("error in validate middlewares");
    }

    const { statusCode, body } = await authSigninService(params);

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
