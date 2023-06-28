const Express = require('express')
const productRoute = require('./products')

const route = Express.Router();

route.use('/product', productRoute);

module.exports = route;