const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');

const {
    METHODS,
    ORIGIN
} = require('../constants/environmentVariables');

module.exports = {
    handleCors: (app) => {
        const corsOptions = {
            origin: ORIGIN,
            methods: METHODS,
            optionsSuccessStatus: 200,
            credentials: true
        };
        return app.use(cors(corsOptions));
    },

    handleBodyRequestParsing: (app) => {
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json())
    },

    handleCompression: (app) => {
        app.use(compression());
    }
}