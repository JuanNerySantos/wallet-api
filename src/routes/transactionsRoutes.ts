import { Router } from "express";
import { createTransactionController } from "../controllers/transaction/transaction-create";
import { authMiddlewares } from "../middlewares/auth-middlewares";

export const transactionRouter = Router();

transactionRouter.post("/transaction", authMiddlewares, createTransactionController);
