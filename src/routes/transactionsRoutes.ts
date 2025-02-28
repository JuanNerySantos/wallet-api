import { Router } from "express";
import { findTransactionController } from "../controllers/transaction/find-transaction";
import { createTransactionController } from "../controllers/transaction/transaction-create";
import { authMiddlewares } from "../middlewares/auth-middlewares";
import { validationSchemaMiddlewares } from "../middlewares/schemas-middlewares";
import { ValidationCreateTransaction } from "../schemas/validation/create-transactin";

export const transactionRouter = Router();

transactionRouter.use(authMiddlewares);

transactionRouter.post(
  "/transaction",
  validationSchemaMiddlewares(ValidationCreateTransaction),
  createTransactionController
);
transactionRouter.get("/transaction", findTransactionController);
