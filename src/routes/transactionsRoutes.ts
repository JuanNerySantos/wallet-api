import { Router } from "express";
import { findTransactionController } from "../controllers/transaction/find-transaction";
import { createTransactionController } from "../controllers/transaction/transaction-create";
import { authMiddlewares } from "../middlewares/auth-middlewares";

export const transactionRouter = Router();

transactionRouter.use(authMiddlewares);

transactionRouter.post("/transaction", createTransactionController);
transactionRouter.get("/transaction", findTransactionController);
