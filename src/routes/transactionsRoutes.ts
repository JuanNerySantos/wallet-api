import { Router } from "express";
import { deleteTransactionController } from "../controllers/transaction/delete-transaction";
import { findTransactionController } from "../controllers/transaction/find-transaction";
import { createTransactionController } from "../controllers/transaction/transaction-create";
import { updateTransactionController } from "../controllers/transaction/update-transaction";
import { authMiddlewares } from "../middlewares/auth-middlewares";
import { validationSchemaMiddlewares } from "../middlewares/schemas-middlewares";
import { ValidationCreateTransaction } from "../schemas/validation/create-transactin";
import { updateTransactionSchema } from "../schemas/validation/update-transaction";

export const transactionRouter = Router();

transactionRouter.use(authMiddlewares);

transactionRouter.post(
  "/transaction",
  validationSchemaMiddlewares(ValidationCreateTransaction),
  createTransactionController
);

transactionRouter.patch(
  "/updateTransaction/:id",
  validationSchemaMiddlewares(updateTransactionSchema),
  updateTransactionController
);

transactionRouter.delete("/deleteTransaction/:id", deleteTransactionController);

transactionRouter.get("/transaction", findTransactionController);
