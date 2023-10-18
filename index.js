require("dotenv").config();
const express = require("express");
const app = express();

const userRoute = require("./routes/countries");
app.use("/countries", userRoute);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
