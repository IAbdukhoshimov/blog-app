const express = require("express");
const router = express.Router();
const logger = require("../config/logger");

router.get("/", async (req, res) => {
    logger.info("GET tags request");

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
    logger.info("GET tags request");

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
    logger.info("GET tags request");

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
    logger.info("GET tags request");

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
    logger.info("GET tags request");

    try {
    } catch (error) {
        logger.error("Error while xyz tag", {
            function: "router.tag.get",
            error: error
        });

        res.status(500).send({ error: error.message });
    }
});
