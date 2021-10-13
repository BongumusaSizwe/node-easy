const http = require('http')

module.exports = {
    getHttpServer: (app) => {
        return http.createServer(app)
    }
}
