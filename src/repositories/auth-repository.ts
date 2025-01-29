import { authModel } from "../models/auth-model";
import UserSchema from "../schemas/user";

async function singup(auth: authModel) {
  const createAuth = await UserSchema.create(auth);
  return createAuth;
}

async function findEmail(email: String) {
  return false;
}

export default {
  singup,
  findEmail,
};
