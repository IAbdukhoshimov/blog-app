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

    getAll: async () => {
        try {
            const res = await Post.find().populate({
                path: "category",
                model: "Category"
            });

            return res;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    update: async (id, data) => {
        if (!id) {
            throw new Error("id is required");
        }

        const { value, error } = PostValidator.validate(data);
        if (error) {
            throw new Error(error.message);
        }

        try {
            let post = await Post.findOne({ _id: id });
            post.title = value.title;
            post.body = value.body;
            post.category = value.category;
            post.tags = value.tags;

            const res = await post.save();
            return res.id;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    delete: async (id) => {
        try {
            await Post.deleteOne({ _id: id });
            return;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

module.exports = postStorage;
