const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require("uuid");

let PostSchema = new Schema({
    id: {
        type: String,
        default: uuidv4()
    },
    title: {
        type: String
    },
    body: {
        type: String
    },
    category: {
        type: String
    },
    tags: [
        {
            type: String
        }
    ],
    author: {
        type: String
    }
});

module.exports = mongoose.model("Post", PostSchema);
