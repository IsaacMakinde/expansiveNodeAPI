require("dotenv").config();
const express = require("express");
const cors = require("cors");
const errorMiddleware = require("./middleware/errorMiddleware");
const userRoute = require("./controllers/countriesController");

const app = express();
app.use(
  cors({
    origin: "http://127.0.0.1:3000",
    // Add other CORS options as needed
  })
);

app.use("/countries", userRoute);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
