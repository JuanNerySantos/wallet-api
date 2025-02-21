import { Request, Response } from "express";
import { authSigninService } from "../../service/auth/auth-signin";

export async function authSigninController(req: Request, res: Response) {
  const params = req.body;

  try {
    const { statusCode, body } = await authSigninService(params);

    res.status(statusCode).send(body);
  } catch (error) {
    res.status(500).send("Internal server error!");
  }
}
