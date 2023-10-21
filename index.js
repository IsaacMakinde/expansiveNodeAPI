require("dotenv").config();
const express = require("express");
const loggerMiddleware = require("./middleware/loggerMiddleware");

const app = express();
const userRoute = require("./routes/countries");

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  // Handle the error, log it, or take appropriate action.
});
app.use("/countries", userRoute);
app.use(loggerMiddleware);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
