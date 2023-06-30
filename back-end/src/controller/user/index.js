const userService = require('../../service/user')
const { STATUS, mapper } = require('../../utils/statusMap')


const login = async (req, res) => {
  const { name, password } = req.body
  const { error, data } = await userService.login({ name , password })
  if (error) return res.status(mapper(error)).json({ message: data })
  return res.status(STATUS.OK).json(data)
}

const auth = async (req, res) => {
  const { name, permission } = req.user
  const dataUserDb = userService.getUser(name)
  if (dataUserDb)
    return res.status(200).json({
      permission,
      status: true
    })
  return res.status(401).json({message: 'Invalid token', status: false })
}

module.exports = { login, auth }