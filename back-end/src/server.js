const Express = require('express')
const routes = require('./Routes')

const app = Express()

//configs
app.use(Express.json())
app.use('/static', Express.static('src/static'))

//routes

app.get('/', (_req, res) => {
  res.status(200).json({message: 'Servidor saudavel'})
})

app.use('/', routes)

module.exports = app