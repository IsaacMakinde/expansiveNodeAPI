const countryRestApi = process.env.REST_COUNTRIES_API_URL;
const axios = require("axios");
const Country = require("../models/countryModel");

countryInfo = {
  getAll: (req, res, next) => {
    axios
      .get(countryRestApi + "/all")
      .then((response) => {
        const countries = response.data.map((country) => new Country(country));
        res.json(countries);
      })
      .catch((error) => {
        next(error);
      });
  },

  getCountryByName: (req, res, next) => {
    axios
      .get(countryRestApi + "/name/" + req.params.name)
      .then((response) => {
        const countryDetails = new Country(response.data[0]);
        res.json(countryDetails);
      })
      .catch((error) => {
        next(error);
        throw error;
      });
  },

  getCountryByCode: (req, res, next) => {
    axios
      .get(countryRestApi + "/alpha?codes=" + req.params.code)
      .then((response) => {
        const countryDetails = new Country(response.data[0]);
        res.json(countryDetails);
      })
      .catch((error) => {
        // res.status(500).send("Error fetching country details based on code");
        // throw error;
        next(error);
      });
  },

  getCountryByLanguage: (req, res, next) => {
    const language = req.params.language;

    // Check if the language parameter is missing or empty
    if (!language) {
      return res.status(400).json({ error: "Language parameter is required." });
    }

    axios
      .get(countryRestApi + "/lang/" + req.params.language)
      .then((response) => {
        const responseData = response.data;
        const countries = responseData.map((country) => new Country(country));
        res.json(countries);
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          // Handle Axios errors

          console.log("why");

          next(error);
        }
      });
  },
};
module.exports = countryInfo;
