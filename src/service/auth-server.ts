import { authModel } from "../models/auth-model";
import authRepository from "../repositories/auth-repository";

async function singup(auth: authModel) {
  const createauth = authRepository.singup(auth);
  return createauth;
}

export default { singup };
