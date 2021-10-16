require("dotenv").config();
const app = require('express')()
const {
    PORT
} = require('./constants/environmentVariables')
const { getHttpServer } = require('./helpers/generalHelper')
const {
    handleCors,
    handleBodyRequestParsing,
    handleCompression
} = require('./middlewares/generalMiddlewares')
const {
    notFoundError,
    serverError
} = require('./middlewares/errorHandler')

handleCors(app)
handleBodyRequestParsing(app)
handleCompression(app)

require('./routes/tuckShop.routes')(app)

const server = getHttpServer(app)

notFoundError(app)
serverError(app)

server.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    console.log(`Server running on port ${PORT}`)
})
