const logger = require("./config/logger");
const cfg = require("./config/index");
const mongoose = require("mongoose");
const express = require("express");

// routes
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const categoryRoute = require("./routes/category");
const tagRoute = require("./routes/tag");
const postRoute = require("./routes/posts");

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
        cfg.mongoPort +
        "/" +
        cfg.mongoDatabase;

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

    // Routers
    app.use("/users", userRoute);
    app.use("/auth", authRoute);
    app.use("/tags", tagRoute);
    app.use("/categories", categoryRoute);
    app.use("/posts", postRoute);

    app.listen(cfg.HTTPPort, () => {
        logger.info(`Express server is running on PORT: ${cfg.HTTPPort}`);
    });
}

main();
