require("dotenv").config();
const express = require("express");

const app = express();
const countriesRouter = require("./controllers/countriesController");
const { errorLoggerMiddleware } = require("./middleware/logging/errorLoggerMiddleware");
const { requestLoggerMiddleware } = require("./middleware/logging/requestLoggerMiddleware");

app.use(requestLoggerMiddleware);

app.use("/countries", countriesRouter);

app.use((req, res, next) => {
    res.status(404).json({ error: "Route not found" });
});

app.use(errorLoggerMiddleware);

module.exports = app;
