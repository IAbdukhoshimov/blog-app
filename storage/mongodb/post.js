const mongoose = require("mongoose");
const Post = require("../../models/post");
const { PostValidator } = require("../../validators/post");

let postStorage = {
    create: async (data) => {
        const { value, error } = PostValidator.validate(data);
        if (error) {
            throw new Error(error.message);
        }

        try {
            const post = new Post(value);
            const res = await post.save();
            return res.id;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    get: async (id) => {
        if (!id) {
            throw new Error("id is required to get post");
        }

        try {
            const res = await Post.findOne({ _id: id })
                .populate({
                    path: "category",
                    model: "Category"
                })
                .populate({
                    path: "tags",
                    model: "Tag"
                });

            return res;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getAll: async () => {},
    update: async (id, data) => {},
    delete: async (id) => {}
};

module.exports = postStorage;
