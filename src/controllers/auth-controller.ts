import { Request, Response } from "express";

async function singup(res: Response, req: Request) {
  const body = req.body;
  const responseHttp = authService.singup(body);

  res.send(responseHttp);
}

export default { singup };
