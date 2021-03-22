const express = require("express");
const router = express.Router();
const logger = require("../config/logger");
const userStorage = require("../storage/mongodb/user");

router.post("/", async (req, res) => {
    logger.info("POST user auth");

    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res
            .status(400)
            .send({ error: "email and password is required" });
    }

    try {
        const user = await userStorage.getUserByEmail({ email: email });
        const match = await user.comparePassword(password);
        return res.status(200).send({ match: match });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

module.exports = router;
