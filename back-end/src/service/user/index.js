const { User } = require('../../db/models/index')
const { createToken } = require('../../utils/jwt')
const { verifyUserCreate } = require('../validation/userValidadate')


const getUser = async (name) => {
  return await User.findOne({ where: { name } })
}

const login = async ({ name, password }) => {
  const data = getUser(name)
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

const create = async (user) => {
  const error = verifyUserCreate(user)
  if (error) return { error: 'INVALID', data: error }
  const { name, alias, photo, permission, id } = await User.create({
    name: user.name,
    password: user.password,
    alias: user.alias || user.name,
    permission: false,
    photo: ''
  })

  const token = createToken({
    id,
    name,
    permission
  })
  return { data: { token, alias, name, photo } }
}

module.exports = { login, getUser, create }