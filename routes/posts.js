const express = require("express");
const router = express.Router();
const logger = require("../config/logger");

router.post("/", async (req, res) => {
    logger.info("POST posts request");

    try {
    } catch (error) {
        logger.error("Error while creating post", {
            function: "router.post.post",
            error: error
        });

        res.status(500).send({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    logger.info("GET posts request");

    try {
    } catch (error) {
        logger.error("Error while retreiving all post", {
            function: "router.post.get",
            error: error
        });

        res.status(500).send({ error: error.message });
    }
});

router.get("/:id", async (req, res) => {
    logger.info("GET posts request");

    try {
    } catch (error) {
        logger.error("Error while retreiving post", {
            function: "router.post.get",
            error: error
        });

        res.status(500).send({ error: error.message });
    }
});

router.put("/:id", async (req, res) => {
    logger.info("PUT posts request");

    try {
    } catch (error) {
        logger.error("Error while updating post", {
            function: "router.post.put",
            error: error
        });

        res.status(500).send({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    logger.info("DELETE posts request");

    try {
    } catch (error) {
        logger.error("Error while deleting post", {
            function: "router.post.delete",
            error: error
        });

        res.status(500).send({ error: error.message });
    }
});
