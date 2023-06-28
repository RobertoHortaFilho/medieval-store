const Express = require('express')
const routes = require('./Routes')

const app = Express()

//configs
app.use(Express.json())

//routes

app.get('/', (_req, res) => {
  res.status(200).json({message: 'Servidor saudavel'})
})

app.use('/', routes)

module.exports = app