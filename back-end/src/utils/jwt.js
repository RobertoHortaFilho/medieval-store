const jwt = require('jsonwebtoken')
const { User } = require('../db/models')

const PRIVATEKEY = process.env.PRIVATEKEY

const createToken = (data) => {
  const token = jwt.sign({ data }, PRIVATEKEY);

  decodeTokenMiddleware(token)
  return token
}

const decodeTokenMiddleware = async  (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) 
    return res.status(401).json({message: 'Unauthorized', status: false})
  try {
    const { data } = jwt.verify(token, PRIVATEKEY)
    req.user = { ...data }
    return next()
  } catch (error) {
    return res.status(401).json({message: 'token expired', status: false})
  }
}

module.exports = {createToken, decodeTokenMiddleware}