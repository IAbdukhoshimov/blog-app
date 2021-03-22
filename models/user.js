const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require("uuid");
const logger = require("../config/logger");
const bycrypt = require("bcrypt");
const SALT_FACTOR = 10;

let UserSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4()
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre("save", async function (next) {
    let user = this;

    if (!user.isModified("password")) {
        return next();
    }

    try {
        let salt = await bycrypt.genSalt(SALT_FACTOR);
        user.password = await bycrypt.hash(user.password, salt);
    } catch (error) {
        logger.error("Error while hashing the user password", {
            error: error
        });

        throw new Error(error.message);
    }

    return next();
});

UserSchema.methods.comparePassword = async function (insertedPassword) {
    let isMatch = false;

    try {
        isMatch = await bycrypt.compare(insertedPassword, this.password);
        return isMatch;
    } catch (error) {
        logger.error("Error while hashing the user password", {
            error: error
        });

        throw new Error(error.message);
    }
};

module.exports = mongoose.model("User", UserSchema);
