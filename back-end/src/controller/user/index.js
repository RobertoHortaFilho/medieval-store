const userService = require('../../service/user')
const { STATUS, mapper } = require('../../utils/statusMap')


const login = async (req, res) => {
  const { name, password } = req.body
  const { error, data } = await userService.login({ name , password })
  if (error) return res.status(mapper(error)).json({ message: data })
  return res.status(STATUS.OK).json(data)
}

module.exports = { login }