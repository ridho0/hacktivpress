const route = require('express').Router()
const user_controller = require('../controllers/user_controller')
const article_controller = require('../controllers/article_controller')

route.get('/', function(req,res) {
  res.send('hai')
})
////////////////// user /////////////////////
route.post('/register', user_controller.register)
route.post('/login', user_controller.login)
route.delete('/user/:id', user_controller.delete)

////////////////// article /////////////////////
route.post('/article', article_controller.createData)
route.get('/article', article_controller.getAllData)
route.get('/article/:id', article_controller.getOneData)
route.delete('/article/:id', article_controller.removeData)

module.exports = route
