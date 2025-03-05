import { httpResponseModel } from "../../models/http-response";
import { updateTransactionModel } from "../../models/update-transaction-model";
import { findOneTransactionRepository } from "../../repositories/transaction/find-one-transaction";
import { updateTransactionRepository } from "../../repositories/transaction/update-transaction";
import { badRquest, notFound, ok } from "../http-response/http-response";

export async function updateTransactionService(id: string, body: updateTransactionModel): Promise<httpResponseModel> {
  if (!id) {
    return badRquest({ message: "Id is required" });
  }

  if (Object.keys(body).length === 0) {
    return badRquest({ message: "params is required" });
  }

  const transactionExists = await findOneTransactionRepository(id);

  if (Object.keys(transactionExists).length === 0) {
    return notFound({ message: "Transaction not found" });
  }

  const updateTransaction = await updateTransactionRepository(id, body);

  return ok(updateTransaction);
}
