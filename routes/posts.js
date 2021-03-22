const express = require("express");
const router = express.Router();
const logger = require("../config/logger");

router.post("/", async (req, res) => {
    logger.info("GET posts request");

    try {
    } catch (error) {
        logger.error("Error while xyz tag", {
            function: "router.tag.get",
            error: error
        });

        res.status(500).send({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    logger.info("GET posts request");

    try {
    } catch (error) {
        logger.error("Error while xyz tag", {
            function: "router.tag.get",
            error: error
        });

        res.status(500).send({ error: error.message });
    }
});

router.get("/:id", async (req, res) => {
    logger.info("GET posts request");

    try {
    } catch (error) {
        logger.error("Error while xyz tag", {
            function: "router.tag.get",
            error: error
        });

        res.status(500).send({ error: error.message });
    }
});

router.put("/:id", async (req, res) => {
    logger.info("GET posts request");

    try {
    } catch (error) {
        logger.error("Error while xyz tag", {
            function: "router.tag.get",
            error: error
        });

        res.status(500).send({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    logger.info("GET posts request");

    try {
    } catch (error) {
        logger.error("Error while xyz tag", {
            function: "router.tag.get",
            error: error
        });

        res.status(500).send({ error: error.message });
    }
});
