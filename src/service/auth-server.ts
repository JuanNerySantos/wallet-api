import bcrypt from "bcrypt";
import { authModel } from "../models/auth-model";
import authRepository from "../repositories/auth-repository";
import { badRquest, created } from "./http-response/http-response";

async function sigup(auth: authModel) {
  if (Object.keys(auth).length === 0) {
    throw new Error("Required params");
  }

  const emailExist = await authRepository.findEmail(auth.email);

  if (emailExist) {
    return badRquest({ message: "Email already exists!" });
  }

  const hashPassword = bcrypt.hashSync(auth.password, 10);

  const createAuth = await authRepository.sigup({
    ...auth,
    password: hashPassword,
  });

  return created(createAuth);
}

export default { sigup };
