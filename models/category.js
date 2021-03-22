const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require("uuid");

let CategorySchema = new Schema({
    id: {
        type: String,
        default: uuidv4()
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Category", CategorySchema);
