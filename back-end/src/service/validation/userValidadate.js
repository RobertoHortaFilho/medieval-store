const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(5).required(),
  password: Joi.string().min(4).required(),
  alias: Joi.string().min(3),
  photo: Joi.string(),
})

const verifyUserCreate = (obj) => {
  const { error } = userSchema.validate(obj)
  if (error) 
    return error.details[0].message
  return null
}

module.exports = { verifyUserCreate }