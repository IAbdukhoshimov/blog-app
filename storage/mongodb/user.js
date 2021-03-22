const User = require("../../models/user");
const UserValidator = require("../../validators/user");

let userStorage = {
    createUser: async (data) => {
        const { value, error } = await UserValidator.validate(data);

        if (error) {
            throw new Error(error.message);
        }

        try {
            const res = await User.findOne({ email: value.email });
            if (res) {
                throw new Error("This email already exists, sorry!");
            }
        } catch (error) {
            throw new Error(error.message);
        }

        try {
            const user = new User(value);
            const res = await user.save();
            return res.id;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getUserByEmail: async (data) => {
        if (!data.email) {
            throw new Error("please provide an email property");
        }

        try {
            const res = await User.findOne({ email: data.email });
            return res;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

module.exports = userStorage;
