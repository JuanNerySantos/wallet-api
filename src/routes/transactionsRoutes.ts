import { Router } from "express";
import { createTransactionController } from "../controllers/transaction/transaction-create";

export const transactionRouter = Router();

transactionRouter.post("/transaction", createTransactionController);
