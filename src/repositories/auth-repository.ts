import { authModel } from "../models/auth-model";
import UserSchema from "../schemas/user";

async function sigup(auth: authModel): Promise<Object> {
  const createAuth = await UserSchema.create(auth);
  return createAuth;
}

async function findEmail(email: String): Promise<boolean> {
  const emailExist = await UserSchema.findOne({ email });
  if (emailExist) {
    return true;
  }
  return false;
}

export default {
  sigup,
  findEmail,
};
