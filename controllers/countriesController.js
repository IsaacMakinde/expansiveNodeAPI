const countryRestApi = process.env.REST_COUNTRIES_API_URL;
const axios = require("axios");
const express = require("express");
const router = express.Router();
const Country = require("../models/countryModel");

// Function to get all countries: Working
router.get("/all", async (req, res, next) => {
  axios
    .get(countryRestApi + "/all")
    .then((response) => {
      const countries = response.data.map((country) => new Country(country));
      res.json(countries);
    })
    .catch((error) => {
      next(error);
    });
});

// Function to get countries by name: Working
router.get("/name/:name?", async (req, res, next) => {
  if (!req.params.name) {
    console.log(req.params.name);
    res.status(400).json({
      status: 400,
      message: "A country name must be provided.",
    });
    return;
  }
  axios
    .get(countryRestApi + "/name/" + req.params.name)
    .then((response) => {
      const countryDetails = new Country(response.data[0]);
      res.json(countryDetails);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/code/:code?", async (req, res, next) => {
  const code = req.params.code;
  // console.log("here", code);
  if (!code) {
    res.status(400).json({
      status: 400,
      message: "A country code must be provided.",
    });
    return;
  }

  axios
    .get(`${countryRestApi}/alpha?codes=${code}`)
    .then((response) => {
      const countryDetails = new Country(response.data[0]);
      res.json(countryDetails);
    })
    .catch((error) => {
      next(error);
    });
});

// Function to get countries by language: Working
router.get("/language/:language?", async (req, res, next) => {
  if (!req.params.language) {
    res.status(400).json({
      status: 400,
      message: "A language must be provided.",
    });

    return;
  }
  axios
    .get(`${countryRestApi}/lang/${req.params.language}`)
    .then((response) => {
      const responseData = response.data;
      const countries = responseData.map((country) => new Country(country));
      res.json(countries);
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        next(error);
      }
    });
});

module.exports = router;
