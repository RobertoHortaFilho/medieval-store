const { Product, Category } = require('../../db/models')
const { verifyProductCreate } = require('../validation/productValidate')

const getByid = async (id) => {
  if (!id) 
    return { error: "INVALIDFIELD", data: 'ID required' }
  const data = await Product.findOne({
    where: { id },
    include: [
      { model: Category, as: 'category'}
    ]
  })
  if (!data)
    return { error: 'NOTFOUND', data: 'product not found' }
  return { data }
}

const create = async ({
  name,
  description,
  price,
  image,
  idCategory
}) => {
  try {
    const error = verifyProductCreate({ name, description, price, image, idCategory })
    if (error)
      return {error: 'INVALIDFIELD', data: error}

    const data = await Product.create({
      name,
      description,
      price,
      image,
      idCategory
    })
    return { data }    
  } catch (e) {
    return { error: 'DB', data: 'Internal error' }
  }
}

module.exports = { getByid, create }