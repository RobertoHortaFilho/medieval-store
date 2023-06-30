const Express = require('express')
const userController = require('../../controller/user')
const { decodeTokenMiddleware } = require('../../utils/jwt')

const route = Express.Router()

route.post('/login', userController.login)
route.post('/auth', decodeTokenMiddleware, userController.auth)

module.exports = route