require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    METHODS: process.env.METHODS,
    ORIGIN: process.env.ORIGIN,
    LOG_DIRECTORY: process.env.LOG_DIRECTORY,
}
