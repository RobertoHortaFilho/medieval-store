const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  description: Joi.string().min(10).required(),
  price: Joi.number().positive().required(),
  image: Joi.string().min(10).required(),
  idCategory: Joi.number().integer().required(),
})

const verifyProductCreate = (obj) => {
  const { error } = productSchema.validate(obj)
  if (error) 
    return error.details[0].message
  return null
}

module.exports = { verifyProductCreate }