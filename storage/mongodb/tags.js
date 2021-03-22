const Tag = require("../../models/tag");

let tagStorage = {
    createTag: async (data) => {
        if (!data.name) {
            throw new Error("name is required to create tag");
        }

        try {
            const tag = new Tag({ name: data.name });
            const res = await tag.save();

            return res.id;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getTag: async (id) => {
        if (!id) {
            throw new Error("id is required");
        }

        try {
            const res = await Tag.findOne({ _id: id });
            return res;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getAllTags: async () => {
        try {
            const res = await Tag.find();
            return res;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    updateTag: async (id, data) => {
        if (!id) {
            throw new Error("id is required");
        }

        if (!data.name) {
            throw new Error("name is required to create tag");
        }

        try {
            let tag = await Tag.findOne({ _id: id });
            tag.name = data.name;
            const res = await tag.save();
            return res.id;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    deleteTag: async (id) => {
        if (!id) {
            throw new Error("id is required");
        }

        try {
            await Tag.findOneAndDelete({ _id: id });
            return;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

module.exports = tagStorage;
