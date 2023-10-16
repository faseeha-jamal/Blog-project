import Joi from "joi";

export const blogUploadValidation = Joi.object({
  title: Joi.string().required().messages({
    "string.base": "Title must be a string",
    "string.empty": "Title can't be left empty",
    "any.required": "Title is required",
  }),
  paragraph: Joi.string().required().messages({
    "string.base": "Paragraph must be a string",
    "string.empty": "Paragraph can't be left empty",
    "any.required": "Paragraph is required",
  }),
  image: Joi.required().messages({
    "any.required": "Image is required",
  }),
});