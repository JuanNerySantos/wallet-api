import { updateTransactionModel } from "../../models/update-transaction-model";
import TransactionSchema from "../../schemas/transaction";

export async function updateTransactionRepository(
  id: string,
  body: updateTransactionModel
): Promise<updateTransactionModel | {}> {
  const updateTransaction = await TransactionSchema.findOneAndUpdate(
    { _id: id },
    { $set: body },
    { new: true, runValidators: true }
  );

  if (updateTransaction) {
    return updateTransaction;
  }

  return {};
}
