const Joi = require("joi");

let PostValidator = Joi.object({
    title: Joi.string().required().min(3).max(100),
    body: Joi.string().required().min(3).max(1000),
    author: Joi.string().required(),
    category: Joi.string().optional(),
    tags: Joi.array().items(Joi.string())
});

module.exports = {
    PostValidator
};
