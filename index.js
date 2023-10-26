require("dotenv").config();
const express = require("express");
const cors = require("cors");
const errorMiddleware = require("./middleware/errorMiddleware");
const userRoute = require("./controllers/countriesController");

const app = express();
app.use(cors("*"));

app.use("/countries", userRoute);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
