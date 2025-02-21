import { httpResponseModel } from "../../models/http-response";
import { transactionModel } from "../../models/transaction-model";
import { findByIdRepository } from "../../repositories/auth/find-by-id";
import { createTransactionRepository } from "../../repositories/transaction/create-transaction";
import { badRquest, created, notFound } from "../http-response/http-response";

export async function createTransactionService(transaction: transactionModel, id: string): Promise<httpResponseModel> {
  if (!id) {
    return badRquest({ message: "Id is required" });
  }

  if (Object.keys(transaction).length === 0) {
    return badRquest({ message: "Params is required" });
  }

  const authExist = await findByIdRepository(id);

  if (Object.keys(authExist).length === 0) {
    return notFound({ message: "User not found." });
  }

  const createTransaction = await createTransactionRepository({ ...transaction, userId: id });

  return created(createTransaction);
}
