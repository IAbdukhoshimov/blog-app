const User = require("../../models/user");
const { UserValidator, UserUpdateValidator } = require("../../validators/user");

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

    getAllUser: async () => {
        try {
            const response = await User.find().select(["-password", "-_id"]);
            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getUser: async (id) => {
        if (!id) {
            throw new Error("id is required to get user");
        }

        try {
            const user = await User.findOne({ id: id }).select([
                "-password",
                "-_id"
            ]);

            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    updateUser: async (id, data) => {
        const { value, error } = await UserUpdateValidator.validate(data);
        if (error) {
            throw new Error(error.message);
        }

        try {
            const userDb = await User.findOne({ id: id }, { password: -1 });
            userDb.firstname = value.firstname;
            userDb.lastname = value.lastname;
            userDb.email = value.email;
            const res = await userDb.save();

            return res.id;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    deleteUser: async (id) => {
        if (!id) {
            throw new Error("id is required to delete user");
        }

        try {
            const res = await User.findByIdAndDelete(id);
            return res;
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
