import { authModel } from "../../models/auth-model";
import UserSchema from "../../schemas/user";

export async function findByIdRepository(id: String): Promise<authModel | {}> {
  const auth = await UserSchema.findById(id);
  if (auth) {
    return auth;
  }
  return {};
}
