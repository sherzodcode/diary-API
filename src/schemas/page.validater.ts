
import Joi from "joi";

export const PageValidator = Joi.object({
    date: Joi.string().min(8).max(10).required(),
    title: Joi.string().min(3).max(48).required(),
    context: Joi.string().required()
})

