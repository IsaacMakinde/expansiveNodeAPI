const expressWinston = require('express-winston');
const { errorLoggerOptions } = require('./loggerConfig');

const errorLoggerMiddleware = expressWinston.errorLogger(errorLoggerOptions);

module.exports = {
    errorLoggerMiddleware
};
