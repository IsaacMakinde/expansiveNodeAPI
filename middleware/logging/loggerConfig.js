const winston = require('winston');

const requestLoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.json(),
      winston.format.prettyPrint(),
      winston.format.colorize({ all: true })
    ),
    msg: 'HTTP {{req.method}} {{req.url}}',
    expressFormat: true,
};

const errorLoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.json(),
      winston.format.prettyPrint(),
      winston.format.colorize({ all: true })
    ),
};

module.exports = {
    requestLoggerOptions,
    errorLoggerOptions
};
