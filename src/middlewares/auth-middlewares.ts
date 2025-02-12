import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { findByIdRepository } from "../repositories/auth/find-by-id";

export async function authMiddlewares(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) {
    console.log("1");
    return res.status(401).send({ message: "Invalid Token" });
  }

  const parts = authorization.split(" ");

  if (parts.length !== 2) {
    console.log("2");

    return res.status(401).send({ message: "Invalid Token" });
  }

  const [schema, token] = parts;

  if (!/^Bearer$/i.test(schema)) {
    console.log("3");
    return res.status(401).send({ message: "Invalid Token" });
  }

  const secret = process.env.SECRET as string;

  jwt.verify(token, secret, async (err: jwt.VerifyErrors | null, decode: JwtPayload | string | undefined) => {
    if (err) {
      console.log("4");

      return res.status(401).send({ message: "Invalid Token" });
    }

    if (!decode) {
      console.log("5");

      return res.status(401).send({ message: "Invalid Token" });
    }
    const id = (decode as JwtPayload).id as string;

    const auth = await findByIdRepository(id);

    if (!auth) {
      console.log("6");

      return res.status(401).send({ message: "Invalid Token" });
    }

    res.locals.auth = auth;
    next();
  });
}
