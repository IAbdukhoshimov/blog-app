const logger = require("./config/logger");
const cfg = require("./config/index");
const mongoose = require("mongoose");
const express = require("express");

function main() {
    logger.info("Main function is running...");
    const mongoDBUrl =
        "mongodb://" +
        // cfg.mongoUser +
        // ":" +
        // cfg.mongoPassword +
        // "@" +
        cfg.mongoHost +
        ":" +
        cfg.mongoPort;
    logger.info("Connecting to db: " + mongoDBUrl);

    mongoose
        .connect(mongoDBUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            logger.info("Successfully connected to mongodb");
        })
        .catch((error) => {
            logger.error("Could not connect to mongodb", {
                error: error
            });

            process.exit(1);
        });

    let app = express();
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    app.listen(cfg.HTTPPort, () => {
        logger.info(`Express server is running on PORT: ${cfg.HTTPPort}`);
    });
}

main();
