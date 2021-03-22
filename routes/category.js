const express = require("express");
const router = express.Router();
const logger = require("../config/logger");
const categoryStorage = require("../storage/mongodb/category");

router.post("/", async (req, res) => {
    logger.info("POST category request");

    try {
        const response = await categoryStorage.createCategory(req.body);
        return res.status(201).send({ id: response });
    } catch (error) {
        logger.error("Error while creating category", {
            function: "router.category.post",
            error: error
        });

        res.status(500).send({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    logger.info("GET category request");

    try {
        const response = await categoryStorage.getAllCategorys();
        return res.status(200).send(response);
    } catch (error) {
        logger.error("Error while retreivign all category", {
            function: "router.category.get",
            error: error
        });

        res.status(500).send({ error: error.message });
    }
});

router.get("/:id", async (req, res) => {
    logger.info("GET category request");

    try {
        const response = await categoryStorage.getCategory(req.params.id);
        return res.status(200).send(response);
    } catch (error) {
        logger.error("Error while retreiving category", {
            function: "router.category.get",
            error: error
        });

        res.status(500).send({ error: error.message });
    }
});

router.put("/:id", async (req, res) => {
    logger.info("PUT category request");

    try {
        const response = await categoryStorage.updateCategory(
            req.params.id,
            req.body
        );

        return res.status(200).send({ id: response });
    } catch (error) {
        logger.error("Error while updating category", {
            function: "router.category.put",
            error: error
        });

        res.status(500).send({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    logger.info("DELETE category request");

    try {
        await categoryStorage.deleteCategory(req.params.id);

        return res.status(200).send({ msg: "deleted successfully" });
    } catch (error) {
        logger.error("Error while deleting category", {
            function: "router.category.delete",
            error: error
        });

        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
