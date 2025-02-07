import { transactionModel } from "../../models/transaction-model";
import TransactionSchema from "../../schemas/transaction";
export async function createTransactionRepository(transaction: transactionModel) {
  const createTransaction = await TransactionSchema.create(transaction);

  return createTransaction;
}
