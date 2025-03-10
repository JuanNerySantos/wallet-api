import Joi from "joi";

export const ValidationSignupAuthUser = Joi.object({
  name: Joi.string().required().min(3),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  createdAt: Joi.string(),
});
