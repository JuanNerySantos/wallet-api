import bcrypt from "bcrypt";
import { httpResponseModel } from "../../models/http-response";
import { signinModel } from "../../models/signin-model";
import { findAuthRepository } from "../../repositories/auth/find-auth";
import { tokenRepository } from "../../repositories/auth/token";
import { badRquest, notFound, ok, unauthorized } from "../http-response/http-response";

export async function authSigninService(params: signinModel): Promise<httpResponseModel> {
  const authExist = await findAuthRepository(params.email);

  if (Object.keys(authExist).length === 0) {
    return notFound({ message: "User not found" });
  }

  if ("password" in authExist) {
    const passwordEncrypted = authExist.password;
    const passwordExist = bcrypt.compareSync(params.password, passwordEncrypted);

    if (!passwordExist) {
      return unauthorized({ message: "email or password is not valid!" });
    }
  }
  if ("_id" in authExist) {
    const id = authExist._id as string;

    const authToken = await tokenRepository(id);

    return ok({ authToken });
  }
  return badRquest({ message: "error" });
}
