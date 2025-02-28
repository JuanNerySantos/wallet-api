import { Request, Response } from "express";
import { authLoggedService } from "../../service/auth/auth-logged";
import { ErrorMiddlewares } from "../error/middlewares-error";

export async function authLoggedController(req: Request, res: Response) {
  try {
    if (res.locals.error !== undefined) {
      throw new ErrorMiddlewares("error in validate middlewares");
    }

    const { _id: id } = res.locals.auth;

    const { statusCode, body } = await authLoggedService(id);

    res.status(statusCode).send(body);
  } catch (error) {
    if (error instanceof ErrorMiddlewares) {
      const existError = res.locals.error;
      res.status(existError.statusCode).send(existError.message);
      return;
    }
    res.status(500).send("Internal server error!");
  }
}
