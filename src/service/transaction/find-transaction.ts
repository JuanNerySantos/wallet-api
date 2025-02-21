import { httpResponseModel } from "../../models/http-response";
import { findByIdRepository } from "../../repositories/auth/find-by-id";
import { findTransactionRepository } from "../../repositories/transaction/find-transaction";
import { badRquest, notFound, ok } from "../http-response/http-response";

export async function findTransactionService(id: string): Promise<httpResponseModel> {
  if (!id) {
    return badRquest({ message: "Id is required" });
  }

  const userExist = await findByIdRepository(id);

  if (Object.keys(userExist).length === 0) {
    return notFound({ message: "User not exist" });
  }

  const transaction = await findTransactionRepository(id);

  return ok(transaction);
}
