import { Request, Response } from "express";
import { findTransactionService } from "../../service/transaction/find-transaction";

export async function findTransactionController(req: Request, res: Response) {
  const { _id: id } = res.locals.auth;

  try {
    const { statusCode, body } = await findTransactionService(id);

    res.status(statusCode).send(body);
  } catch (error) {
    res.status(500).send("Internal server error!");
  }
}
