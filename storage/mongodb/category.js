const Category = require("../../models/category");

let categoryStorage = {
    createCategory: async (data) => {
        if (!data.name) {
            throw new Error("name is required to create Category");
        }

        try {
            const categroy = new Category({ name: data.name });
            const res = await categroy.save();

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
            const res = await Category.findOne({ _id: id });
            return res;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getAllCategorys: async () => {
        try {
            const res = await Category.find();
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
            let category = await Category.findOne({ _id: id });
            category.name = data.name;
            const res = await category.save();
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
            await Category.findOneAndDelete({ _id: id });
            return;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

module.exports = categoryStorage;
