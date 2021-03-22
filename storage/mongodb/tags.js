const Tag = require("../../models/tag");

let tagStorage = {
    createTag: async (data) => {
        if (!id) {
            throw new Error("id is required");
        }

        if (!data.name) {
            throw new Error("name is required to create tag");
        }

        try {
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getTag: async (id) => {
        if (!id) {
            throw new Error("id is required");
        }

        if (!data.name) {
            throw new Error("name is required to create tag");
        }

        try {
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getAllTags: async () => {
        if (!id) {
            throw new Error("id is required");
        }

        if (!data.name) {
            throw new Error("name is required to create tag");
        }

        try {
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
        } catch (error) {
            throw new Error(error.message);
        }
    },

    deleteTag: async (id) => {
        if (!id) {
            throw new Error("id is required");
        }

        if (!data.name) {
            throw new Error("name is required to create tag");
        }

        try {
        } catch (error) {
            throw new Error(error.message);
        }
    }
};
