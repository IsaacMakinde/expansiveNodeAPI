const express = require("express");
const router = express.Router();
const axios = require("axios");
const Country = require("../models/countryModel");
const countryRestApi = process.env.REST_COUNTRIES_API_URL;

router.get("/all", (req, res, next) => {
  axios.get(`${countryRestApi}/all`)
    .then(response => {
      const countries = response.data.map(country => new Country(country));
      res.json(countries);
    })
    .catch(error => {
      next(error);
    });
});

router.get("/name/:name", (req, res, next) => {
  axios.get(`${countryRestApi}/name/${req.params.name}`)
    .then(response => {
      const countryDetails = new Country(response.data[0]);
      res.json(countryDetails);
    })
    .catch(error => {
      next(error);
    });
});

router.get("/code/:code", (req, res, next) => {
  axios.get(`${countryRestApi}/alpha?codes=${req.params.code}`)
    .then(response => {
      const countryDetails = new Country(response.data[0]);
      res.json(countryDetails);
    })
    .catch(error => {
      next(error);
    });
});

router.get("/language/:language", async (req, res, next) => {
  const language = req.params["language"];
  
  if (!language || language.trim() === "") {
    return res.status(400).json({ error: "Language parameter is required." });
  }

  try {
    const response = await axios.get(`${countryRestApi}/lang/${language}`);
    if (response.status != 200) {
      return res.status(response.status).json({ error: "Invalid response from API" });
    }
    const countries = response.data.map(country => new Country(country));
    res.json(countries);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      next(error);
    }
  }
});

module.exports = router;
