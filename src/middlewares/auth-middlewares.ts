import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { findByIdRepository } from "../repositories/auth/find-by-id";

export async function authMiddlewares(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).send({ message: "Invalid Token" });
  }

  const parts = authorization ? authorization.split(" ") : [];

  if (parts.length !== 2) {
    res.status(401).send({ message: "Invalid Token" });
  }

  const [schema, token] = parts;

  if (!/^Bearer$/i.test(schema)) {
    res.status(401).send({ message: "Invalid Token" });
  }

  const secret = process.env.SECRET as string;

  jwt.verify(
    token,
    secret,
    async (err: jwt.VerifyErrors | null, decode: JwtPayload | string | undefined): Promise<void> => {
      if (err) {
        res.status(401).send({ message: "Invalid Token" });
      }

      if (!decode) {
        res.status(401).send({ message: "Invalid Token" });
      }
      const id = (decode as JwtPayload).id as string;

      const auth = await findByIdRepository(id);

      if (!auth) {
        res.status(401).send({ message: "Invalid Token" });
      }

      res.locals.auth = auth;
      next();
    }
  );
}
