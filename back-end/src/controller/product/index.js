const productService = require('../../service/product')
const { mapper, STATUS } = require('../../utils/statusMap')

const fs = require('fs')


const getByid = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await productService.getByid(id)
  if ( error )
    return res.status(mapper(error)).json({ message: data })
  return res.status(STATUS.OK).json(data)
};

const create = async (req, res) => {
  const { body, file } = req;
  if (!file)
    return res.status(mapper('INVALIDFIELD')).json({ message: 'Image "file" is required' })  

  const { data, error } = await productService.create({...body, image: file.filename});
  
  if ( error ) {
    fs.unlinkSync(`src/static/products/${file.filename}`)
    return res.status(mapper(error)).json({ message: data});
  }
  return res.status(STATUS.CREATED).json(data)
};


module.exports = { getByid, create }