import { Request, Response } from "express";
import { authSignupService } from "../../service/auth/auth-signup";

export async function authSignupController(req: Request, res: Response) {
  try {
    const authParams = req.body;

    const { statusCode, body } = await authSignupService(authParams);

    res.status(statusCode).send(body);
  } catch (error) {
    res.status(500).send("Internal server error!");
  }
}
