const express = require("express");
const router = express.Router();
const logger = require("../config/logger");
const tagStorage = require("../storage/mongodb/tags");

router.post("/", async (req, res) => {
    logger.info("POST tags request");

    try {
        const response = await tagStorage.createTag(req.body);
        return res.status(201).send({ id: response });
    } catch (error) {
        logger.error("Error while creating tag", {
            function: "router.tag.post",
            error: error
        });

        res.status(500).send({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    logger.info("GET tags request");

    try {
        const response = await tagStorage.getAllTags();
        return res.status(200).send(response);
    } catch (error) {
        logger.error("Error while retreiving all tag", {
            function: "router.tag.get",
            error: error
        });

        res.status(500).send({ error: error.message });
    }
});

router.get("/:id", async (req, res) => {
    logger.info("GET tags request");

    try {
        const response = await tagStorage.getTag(req.params.id);
        return res.send(response);
    } catch (error) {
        logger.error("Error while retreiving tag", {
            function: "router.tag.get",
            error: error
        });

        res.status(500).send({ error: error.message });
    }
});

router.put("/:id", async (req, res) => {
    logger.info("PUT tags request");

    try {
        const response = await tagStorage.updateTag(req.params.id, req.body);
        return res.send({ id: response });
    } catch (error) {
        logger.error("Error while updating tag", {
            function: "router.tag.put",
            error: error
        });

        res.status(500).send({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    logger.info("DELETE tags request");

    try {
        await tagStorage.deleteTag(req.params.id);
        return res.status(200).send({ msg: "Deleted successfully" });
    } catch (error) {
        logger.error("Error while deleting tag", {
            function: "router.tag.delete",
            error: error
        });

        res.status(500).send({ error: error.message });
    }
});
