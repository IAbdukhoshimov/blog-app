const User = require("../../models/user");
const UserValidator = require("../../validators/user");

let userStorage = {
    createUser: async (data) => {
        const { value, error } = await UserValidator.validate(data);

        if (error) {
            throw new Error(error.message);
        }

        try {
            const user = new User(value);
            const res = await user.save();
            return res.id;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

module.exports = userStorage;
