import { Request, Response } from "express";
import { createTransactionService } from "../../service/transaction/transaction-create";
import { ErrorMiddlewares } from "../error/middlewares-error";
export async function createTransactionController(req: Request, res: Response) {
  try {
    if (res.locals.error !== undefined) {
      throw new ErrorMiddlewares("error in validate middlewares");
    }

    const transaction = req.body;
    const { _id: id } = res.locals.auth;

    const { statusCode, body } = await createTransactionService({ ...transaction }, id);

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
