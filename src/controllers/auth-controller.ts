import { Request, Response } from "express";
import authService from "../service/auth-server";

async function singup(req: Request, res: Response) {
  const body = req.body;
  const responseHttp = await authService.singup(body);
  res.send(responseHttp);
}

export default { singup };
