import "dotenv/config";
import jwt from "jsonwebtoken";

const secret = process.env.SECRET as string;

export async function tokenRepository(id: string): Promise<String> {
  return jwt.sign({ id }, secret, { expiresIn: 86400 });
}
