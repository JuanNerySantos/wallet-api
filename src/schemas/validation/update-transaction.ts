import Joi from "joi";

export const updateTransactionSchema = Joi.object({
  amount: Joi.number().optional(),
  description: Joi.string().optional(),
  type: Joi.string().optional(),
});
