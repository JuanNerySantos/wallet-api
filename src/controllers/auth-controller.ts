import { Request, Response } from "express";
import authService from "../service/auth-server";

async function sigup(req: Request, res: Response) {
  const authParams = req.body;

  const { statusCode, body } = await authService.sigup(authParams);

  res.status(statusCode).send(body);
}

export default { sigup };
