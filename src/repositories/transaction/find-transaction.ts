import { transactionModel } from "../../models/transaction-model";
import TransactionSchema from "../../schemas/transaction";

export async function findTransactionRepository(id: string): Promise<transactionModel | {}> {
  const transaction = await TransactionSchema.findById(id);
  if (transaction) {
    return transaction;
  }
  return {};
}
