const countryRestApi = process.env.REST_COUNTRIES_API_URL;
const axios = require("axios");
const Country = require("../models/Country");

countryInfo = {
  getAll: (res) => {
    axios
      .get(countryRestApi + "/all")
      .then((response) => {
        const countries = response.data.map((country) => new Country(country));
        res.json(countries);
      })
      .catch((error) => {
        res.status(500).send("Error fetching country list");
        throw error;
      });
  },

  getCountryByName: (req, res) => {
    axios
      .get(countryRestApi + "/name/" + req.params.name)
      .then((response) => {
        const countryDetails = new Country(response.data[0]);
        res.json(countryDetails);
      })
      .catch((error) => {
        res.status(500).send("Error fetching country details based on name");
        throw error;
      });
  },

  getCountryByCode: (req, res) => {
    axios
      .get(countryRestApi + "/alpha?codes=" + req.params.code)
      .then((response) => {
        const countryDetails = new Country(response.data[0]);
        res.json(countryDetails);
      })
      .catch((error) => {
        res.status(500).send("Error fetching country details based on code");
        throw error;
      });
  },
  getCountryByLanguage: (req, res) => {
    axios
      .get(countryRestApi + "/lang/" + req.params.language)
      .then((response) => {
        const countries = response.data.map((country) => new Country(country));
        res.json(countries);
      })
      .catch((error) => {
        res
          .status(500)
          .send("Error fetching country details based on language");
        throw error;
      });
  },
};
module.exports = countryInfo;
