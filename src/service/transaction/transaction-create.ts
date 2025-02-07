import { httpResponseModel } from "../../models/http-response";
import { transactionModel } from "../../models/transaction-model";
import { createTransactionRepository } from "../../repositories/transaction/create-transaction";
import { ok } from "../http-response/http-response";

export async function createTransactionService(transaction: transactionModel): Promise<httpResponseModel> {
  const createTransaction = await createTransactionRepository(transaction);

  return ok(createTransaction);
}
