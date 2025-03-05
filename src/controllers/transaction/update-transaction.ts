import { Request, Response } from "express";
import { updateTransactionService } from "../../service/transaction/update-transaction";
import { ErrorMiddlewares } from "../error/middlewares-error";

export async function updateTransactionController(req: Request, res: Response) {
  try {
    if (res.locals.error !== undefined) {
      throw new ErrorMiddlewares("error in validate middlewares");
    }
    const { id } = req.params;

    const { statusCode, body } = await updateTransactionService(id, req.body);

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
