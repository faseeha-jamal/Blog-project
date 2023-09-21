import joi from "joi";

export const signinValidation =  joi.object({
    email:joi.string().email().required().messages({
        "string.base":"Email must be a string",
        "string.empty":"Email cano't be left empty",
        "string.email":"Email must be a valid email adress",
        "any.required":"Email is required"
        
    }),
    password:joi.string().required().max(16).min(8).messages({
        "string.base":"password must be a string",
        "string.empty":"password cano't be left empty",
        "string.max":"password at most 16 characters",
        "string.min":"password at list 8 characters",
        "any.required":"password is required"

    })
});