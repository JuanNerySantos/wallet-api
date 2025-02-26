import Joi from "joi";

export const ValidationCreateTransaction = Joi.object({
  value: Joi.number().required(),
  description: Joi.number().required().min(3),
  type: Joi.number().required().valid("input", "output"),
  userId: Joi.object(),
  createdAt: Joi.string(),
});
