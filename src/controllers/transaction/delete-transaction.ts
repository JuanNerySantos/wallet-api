import { Request, Response } from "express";
import { deleteTransactionService } from "../../service/transaction/delete-transaction";
import { ErrorMiddlewares } from "../error/middlewares-error";

export async function deleteTransactionController(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const { statusCode, body } = await deleteTransactionService(id);

    res.status(statusCode).send(body);
  } catch (error) {
    if (error instanceof ErrorMiddlewares) {
      const existError = res.locals.error;
      res.status(existError.statusCode).send(existError.message);
      return;
    }
    res.status(500).send("Internal server error!");
  }
}
