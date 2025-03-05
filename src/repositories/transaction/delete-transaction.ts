import { transactionModel } from "../../models/transaction-model";
import TransactionSchema from "../../schemas/transaction";

export async function deleteTransactionRepository(id: string): Promise<transactionModel | {}> {
  const transaction = await TransactionSchema.findOneAndDelete({ _id: id });
  if (transaction) {
    return transaction;
  }
  return {};
}
