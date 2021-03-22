const Joi = require("joi");

let UserValidator = Joi.object({
    firstname: Joi.string().required().min(3).max(100),
    lastname: Joi.string().required().min(3).max(100),
    email: Joi.string().required().min(3).max(100),
    password: Joi.string().required().min(5).max(12)
});

let UserUpdateValidator = Joi.object({
    firstname: Joi.string().required().min(3).max(100),
    lastname: Joi.string().required().min(3).max(100),
    email: Joi.string().required().min(3).max(100)
});

module.exports = {
    UserValidator,
    UserUpdateValidator
};
