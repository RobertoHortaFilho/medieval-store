const { User } = require('../../db/models/index')
const { createToken } = require('../../utils/jwt')


const login = async ({ name, password }) => {
  const data = await User.findOne({ where: { name } })
  if (!data)
    return { error: 'NOTFOUND', data: 'incorrect user'}
  if (data.password === password) {
    const { id, name, permission, alias, photo} = data
    const token = createToken({
      id,
      name,
      permission
    })
    return { data: {
      alias, photo, permission, token,
    } }
  }
  return { error: 'NOTFOUND', data: 'incorrect user' }
}

module.exports = { login }