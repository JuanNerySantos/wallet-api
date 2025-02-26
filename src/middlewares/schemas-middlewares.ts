import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export function validationSchemaMiddlewares(schema: Joi.ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map(detail => detail.message);
      const httpError = {
        statusCode: 422,
        message: errors,
      };

      res.locals.error = httpError;
    }

    next();
  };
}
