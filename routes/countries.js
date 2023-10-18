const express = require("express");
const router = express.Router();

const controller = require("../controllers/countriesController");

router.get("/all", controller.getAll);

router.get("/:name", controller.getCountryByName);

router.get("/code/:code", controller.getCountryByCode);

router.get("/language/:language", controller.getCountryByLanguage);

module.exports = router;
