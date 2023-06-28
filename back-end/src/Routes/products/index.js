const Express = require('express');
const productController = require('../../controller/product');
const upload = require('../../utils/productmulter');

const route = Express.Router();


route.get('/:id', productController.getByid)
route.post('/', upload.single('file'), productController.create)

module.exports = route;