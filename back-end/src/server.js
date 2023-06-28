const Express = require('express')

const app = Express()

//configs
app.use(Express.json())

//routes

app.get('/', (_req, res) => {
  res.status(200).json({message: 'Servidor saudavel'})
})

module.exports = app