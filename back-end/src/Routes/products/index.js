const Express = require('express');
const route = Express.Router();

route.get('/', (_req, res) => {
  res.status(200).json({message: 'rota produtos'})
})

module.exports = route;