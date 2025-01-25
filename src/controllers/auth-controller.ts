import { Request, Response } from "express";
import authService from "../service/auth-server";
async function singup(res: Response, req: Request) {
  const body = req.body;
  const responseHttp = authService.singup(body);

  res.send(responseHttp);
}

export default { singup };
