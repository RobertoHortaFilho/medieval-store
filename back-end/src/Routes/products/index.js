const Express = require('express');
const productController = require('../../controller/product')

const route = Express.Router();


route.get('/:id', productController.getByid)
route.post('/', productController.create)

module.exports = route;