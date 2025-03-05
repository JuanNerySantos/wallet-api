import { httpResponseModel } from "../../models/http-response";
import { deleteTransactionRepository } from "../../repositories/transaction/delete-transaction";
import { findOneTransactionRepository } from "../../repositories/transaction/find-one-transaction";
import { badRquest, notFound, ok } from "../http-response/http-response";

export async function deleteTransactionService(id: string): Promise<httpResponseModel> {
  if (!id) {
    return badRquest({ message: "Id is required" });
  }

  const transactionExists = await findOneTransactionRepository(id);

  if (Object.keys(transactionExists).length === 0) {
    return notFound({ message: "Transaction not found" });
  }

  const deleteTransaction = await deleteTransactionRepository(id);

  return ok(deleteTransaction);
}
