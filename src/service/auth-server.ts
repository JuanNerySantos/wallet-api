import bcrypt from "bcrypt";
import { authModel } from "../models/auth-model";
import authRepository from "../repositories/auth-repository";

async function singup(auth: authModel) {
  if (Object.keys(auth).length === 0) {
    throw new Error("Required params");
  }

  const emailExist = await authRepository.findEmail(auth.email);

  if (emailExist) {
    throw new Error("Email already exists!");
  }

  const hashPassword = bcrypt.hashSync(auth.password, 10);

  const createAuth = await authRepository.singup({
    ...auth,
    password: hashPassword,
  });

  return createAuth;
}

export default { singup };
