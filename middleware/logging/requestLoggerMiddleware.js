const expressWinston = require('express-winston');
const { requestLoggerOptions } = require('./loggerConfig');

const requestLoggerMiddleware = expressWinston.logger(requestLoggerOptions);

module.exports = {
    requestLoggerMiddleware
};
