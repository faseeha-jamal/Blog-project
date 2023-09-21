import joi from "joi";

export const verifyOtpValidation = joi.object({
    otp:joi.number().required().max(999999).messages({
        "number.base":"OTP must be a number",
        "number.empty":"Invalied otp",
        "number.max":"Invalied otp",
        "any.required":"Invalied otp"
    }),
    verifyToken:joi.string().required().messages({
        "string.base":"Verify token must be a string",
        "string.empty":"Verify token cano't be left empty",
        "any.required":"Verify token is required"  
    })
})