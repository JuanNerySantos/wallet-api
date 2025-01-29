import { authModel } from "../models/auth-model";

async function singup(auth: authModel) {
  return auth;
}

async function findEmail(email: String) {
  return true;
}

export default {
  singup,
  findEmail,
};
