const restfy = require('restify')
const server = restfy.createServer()
const routes = require('../routes')
const cors = require('./cors')

const jwtMiddleware = require('./jwtMiddleware')

const exclusion = ['/autenticacao']

server.pre(cors.preflight)
server.use(cors.actual)
server.use(restfy.plugins.bodyParser())
server.use(jwtMiddleware({ exclusion }))


routes(server)

module.exports = server