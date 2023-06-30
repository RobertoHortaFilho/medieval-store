const Express = require('express')
const userController = require('../../controller/user')

const route = Express.Router()

route.post('/login', userController.login)

module.exports = route