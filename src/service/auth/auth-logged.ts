import { findByIdRepository } from "../../repositories/auth/find-by-id";
import { badRquest, notFound, ok } from "../http-response/http-response";

export async function authLoggedService(id: string) {
  if (!id) {
    return badRquest({ message: "User not logged" });
  }

  const idExist = await findByIdRepository(id);

  if (Object.keys(idExist).length === 0) {
    return notFound({ message: "User not found" });
  }

  return ok(idExist);
}
