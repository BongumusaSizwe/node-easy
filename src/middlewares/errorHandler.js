const {
    HTTP_404_STATUS_CODE,
    HTTP_404_MESSAGE,
    HTTP_500_STATUS_CODE,
    HTTP_500_MESSAGE
} = require('../constants/errorConstants');

module.exports = {
    notFoundError: (app) => {
        app.use((req, res, next) => {
            res.status(HTTP_404_STATUS_CODE).send({
                status: HTTP_404_STATUS_CODE,
                error: HTTP_404_MESSAGE
            });
        });
    },

    serverError: (app) => {
        app.use((error, req, res, next) => {
            res.status(error.status || HTTP_500_STATUS_CODE).send({
                error: {
                    status: error.status || HTTP_500_STATUS_CODE,
                    message: error.message || HTTP_500_MESSAGE,
                },
            });
        });
    }
}