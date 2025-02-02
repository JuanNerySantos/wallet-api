import { Request, Response } from "express";
import { authSignupService } from "../../service/auth/auth-signup";

export async function authSignupController(req: Request, res: Response) {
  const authParams = req.body;

  const { statusCode, body } = await authSignupService(authParams);

  res.status(statusCode).send(body);
}
