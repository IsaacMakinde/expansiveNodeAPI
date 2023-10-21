const loggerMiddleware = (err, req, res, next) => {
  if (err) {
    if (err.response && err.response.status === 404) {
      res.status(404).json({
        status: 404,
        message: "No countries were found.",
      });
    } else {
      res.status(500).json({
        status: 500,
        error: "Internal server error",
        message: err.message || "Unknown error occurred",
      });
    }

    // Log the error stack for internal debugging (optional)
    // console.error("Error:", err.stack);
    return;
  }
};

module.exports = loggerMiddleware;
