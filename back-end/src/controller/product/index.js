const productService = require('../../service/product')
const { mapper, STATUS } = require('../../utils/statusMap')


const getByid = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await productService.getByid(id)
  if ( error )
    return res.status(mapper(error)).json({ message: data })
  return res.status(STATUS.OK).json(data)
};

const create = async (req, res) => {
  const { body } = req;
  const { data, error } = await productService.create(body);
  if ( error )
    return res.status(mapper(error)).json({ message: data});
  return res.status(STATUS.CREATED).json(data)
};


module.exports = { getByid, create }