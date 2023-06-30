const jwt = require('jsonwebtoken')

const PRIVATEKEY = process.env.PRIVATEKEY

const createToken = (data) => {
  const token = jwt.sign({ data }, PRIVATEKEY);

  decodeTokenMiddleware(token)
  return token
}

const decodeTokenMiddleware = (token) => {
  try {
    const decode = jwt.verify(token, PRIVATEKEY)
    return decode
  } catch (error) {
    throw new Error('Token invalido')
  }
}

module.exports = {createToken, decodeTokenMiddleware}