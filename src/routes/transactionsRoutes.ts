import { Router } from "express";
import { findTransactionController } from "../controllers/transaction/find-transaction";
import { createTransactionController } from "../controllers/transaction/transaction-create";
import { authMiddlewares } from "../middlewares/auth-middlewares";

export const transactionRouter = Router();

transactionRouter.post("/transaction", authMiddlewares, createTransactionController);
transactionRouter.get("/transaction", authMiddlewares, findTransactionController);
