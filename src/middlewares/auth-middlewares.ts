import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { findByIdRepository } from "../repositories/auth/find-by-id";

export async function authMiddlewares(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { authorization } = req.headers;
  if (!authorization) {
    const httpError = {
      statusCode: 401,
      message: "Invalid Token",
    };

    res.locals.error = httpError;
  }

  const parts = authorization ? authorization.split(" ") : [];

  if (parts.length !== 2) {
    const httpError = {
      statusCode: 401,
      message: "Invalid Token",
    };

    res.locals.error = httpError;
  }

  const [schema, token] = parts;

  if (!/^Bearer$/i.test(schema)) {
    const httpError = {
      statusCode: 401,
      message: "Invalid Token",
    };

    res.locals.error = httpError;
  }

  const secret = process.env.SECRET as string;

  jwt.verify(
    token,
    secret,
    async (err: jwt.VerifyErrors | null, decode: JwtPayload | string | undefined): Promise<void> => {
      if (err) {
        const httpError = {
          statusCode: 401,
          message: "Invalid Token",
        };

        res.locals.error = httpError;
      }

      if (decode === undefined) {
        const httpError = {
          statusCode: 401,
          message: "Invalid Token",
        };
        res.locals.error = httpError;

        next();
        return;
      }
      const id = (decode as JwtPayload).id as string;

      const auth = await findByIdRepository(id);

      if (!auth) {
        const httpError = {
          statusCode: 401,
          message: "Invalid Token",
        };

        res.locals.error = httpError;
        next();
      }

      res.locals.auth = auth;
      next();
    }
  );
}
