import { authModel } from "../../models/auth-model";
import UserSchema from "../../schemas/user";

export async function findAuthRepository(
  email: String
): Promise<authModel | {}> {
  const auth = await UserSchema.findOne({ email });
  if (auth) {
    return auth;
  }
  return {};
}
