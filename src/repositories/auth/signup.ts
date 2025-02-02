import { authModel } from "../../models/auth-model";
import UserSchema from "../../schemas/user";

export async function sigupRepository(auth: authModel): Promise<Object> {
  const createAuth = await UserSchema.create(auth);
  return createAuth;
}
