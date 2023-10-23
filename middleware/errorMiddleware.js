const errorMiddleware = (err, req, res, next) => {
  if (err) {
    if (err.response && err.response.status === 404) {
      res.status(404).json({
        status: 404,
        message: "No countries were found.",
      });
    } else if (err.response && err.response.status === 400) {
      res.status(400).json({
        status: 400,
        message: "Bad request.",
      });
    } else {
      res.status(500).json({
        status: 500,
        error: "Internal server error",
        message: err.message || "Unknown error occurred",
      });
    }
    console.log("Error:", {
      status: err.response.status,
      message: err.message,
      trace: err.stack,
    });
    return;
  }
};

module.exports = errorMiddleware;
