import { httpResponseModel } from "../../models/http-response";
import { findByIdRepository } from "../../repositories/auth/find-by-id";
import { findAllTransactionRepository } from "../../repositories/transaction/find-all-transaction";
import { badRquest, notFound, ok } from "../http-response/http-response";

export async function findTransactionService(id: string): Promise<httpResponseModel> {
  if (!id) {
    return badRquest({ message: "Id is required" });
  }

  const userExist = await findByIdRepository(id);

  if (Object.keys(userExist).length === 0) {
    return notFound({ message: "User not exist" });
  }

  const transaction = await findAllTransactionRepository(id);

  return ok(transaction);
}
