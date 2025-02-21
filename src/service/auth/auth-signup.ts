import bcrypt from "bcrypt";
import { authModel } from "../../models/auth-model";
import { findAuthRepository } from "../../repositories/auth/find-auth";
import { sigupRepository } from "../../repositories/auth/signup";
import { badRquest, created } from "../http-response/http-response";

export async function authSignupService(auth: authModel) {
  if (Object.keys(auth).length === 0) {
    throw new Error("Required params");
  }

  const authExist = await findAuthRepository(auth.email);

  if (Object.keys(authExist).length !== 0) {
    return badRquest({ message: "Email already exists!" });
  }

  const hashPassword = bcrypt.hashSync(auth.password, 10);

  const createAuth = await sigupRepository({
    ...auth,
    password: hashPassword,
  });

  return created(createAuth);
}
