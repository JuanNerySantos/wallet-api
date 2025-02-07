import { Request, Response } from "express";
import { createTransactionService } from "../../service/transaction/transaction-create";
export async function createTransactionController(req: Request, res: Response) {
  const transaction = req.body;
  //   const id = "juan";

  const { statusCode, body } = await createTransactionService({ ...transaction });

  res.status(statusCode).send(body);
}
