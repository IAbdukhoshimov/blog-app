const express = require("express");
const router = express.Router();
const logger = require("../config/logger");
const userStorage = require("../storage/mongodb/user");

router.get("/ping", (req, res) => {
    logger.info("Request GET to user/ping");
    return res.send({ ping: "pong" });
});

router.post("/", async (req, res) => {
    logger.info("POST user request");

    try {
        const response = await userStorage.createUser(req.body);
        return res.send(response);
    } catch (error) {
        logger.error("Error while creating a user", {
            fucntion: "router.post.user",
            error: error
        });

        return res.status(500).send({ error: error.message });
    }
});

module.exports = router;
