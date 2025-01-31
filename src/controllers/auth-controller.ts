import { Request, Response } from "express";
import authService from "../service/auth-server";

async function singup(req: Request, res: Response) {
  const authParams = req.body;

  const { statusCode, body } = await authService.singup(authParams);

  res.status(statusCode).send(body);
}

export default { singup };
