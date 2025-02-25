import { Request, Response } from "express";
import { authLoggedService } from "../../service/auth/auth-logged";

export async function authLoggedController(req: Request, res: Response) {
  const { _id: id } = res.locals.auth;

  try {
    const { statusCode, body } = await authLoggedService(id);

    res.status(statusCode).send(body);
  } catch (error) {
    res.status(500).send("Internal server error!");
  }
}
