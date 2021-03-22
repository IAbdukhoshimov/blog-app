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
        return res.send({ id: response });
    } catch (error) {
        logger.error("Error while creating a user", {
            fucntion: "router.post.user",
            error: error
        });

        return res.status(500).send({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    logger.info("GET user request");

    try {
        const response = await userStorage.getAllUser();
        return res.status(200).send(response);
    } catch (error) {
        logger.error("Error while creating a user", {
            fucntion: "router.post.user",
            error: error
        });

        return res.status(500).send({ error: error.message });
    }
});

router.get("/:id", async (req, res) => {
    logger.info("GET user request");

    try {
        const response = await userStorage.getUser(req.params.id);
        return res.status(200).send(response);
    } catch (error) {
        logger.error("Error while creating a user", {
            fucntion: "router.post.user",
            error: error
        });

        return res.status(500).send({ error: error.message });
    }
});

router.put("/:id", async (req, res) => {
    logger.info("PUT user request");

    try {
        const response = await userStorage.updateUser(req.params.id, req.body);
        return res.status(200).send({ id: response });
    } catch (error) {
        logger.error("Error while creating a user", {
            fucntion: "router.post.user",
            error: error
        });

        return res.status(500).send({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    logger.info("DELETE user request");

    try {
        const response = await userStorage.deleteUser(req.params.id);
        return res.send({ msg: "deleted successfully" });
    } catch (error) {
        logger.error("Error while creating a user", {
            fucntion: "router.post.user",
            error: error
        });

        return res.status(500).send({ error: error.message });
    }
});
module.exports = router;
