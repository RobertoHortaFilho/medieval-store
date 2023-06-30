const Express = require('express')
const productRoute = require('./products')
const userRoute = require('./users')

const route = Express.Router();

route.use('/product', productRoute);
route.use('/user', userRoute);

module.exports = route;