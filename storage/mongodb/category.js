const Category = require("../../models/category");

let categoryStorage = {
    createCategory: async (data) => {
        if (!data.name) {
            throw new Error("name is required to create Category");
        }

        try {
            const Category = new Category({ name: data.name });
            const res = await Category.save();

            return res.id;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getCategory: async (id) => {
        if (!id) {
            throw new Error("id is required");
        }

        try {
            const res = await Category.findOne({ id: id }).select(["-_id"]);
            return res;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getAllCategorys: async () => {
        try {
            const res = await Category.find().select(["-_id"]);
            return res;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    updateCategory: async (id, data) => {
        if (!id) {
            throw new Error("id is required");
        }

        if (!data.name) {
            throw new Error("name is required to create Category");
        }

        try {
            let Category = await Category.findOne({ id: id });
            Category.name = data.name;
            const res = await Category.save();
            return res.id;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    deleteCategory: async (id) => {
        if (!id) {
            throw new Error("id is required");
        }

        try {
            await Category.findOneAndDelete({ id: id });
            return;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

module.exports = categoryStorage;
