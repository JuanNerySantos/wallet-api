import { transactionModel } from "../../models/transaction-model";
import TransactionSchema from "../../schemas/transaction";

export async function findOneTransactionRepository(id: string): Promise<transactionModel | {}> {
  const transactionExists = await TransactionSchema.findOne({ _id: id });
  if (transactionExists) {
    return transactionExists;
  }
  return {};
}
