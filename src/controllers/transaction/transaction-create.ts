import { Request, Response } from "express";
import { createTransactionService } from "../../service/transaction/transaction-create";
export async function createTransactionController(req: Request, res: Response) {
  const transaction = req.body;
  const { _id: id } = res.locals.auth;

  const { statusCode, body } = await createTransactionService({ ...transaction }, id);

  res.status(statusCode).send(body);
}
