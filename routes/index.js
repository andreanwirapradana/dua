const route = require('express').Router()
const costumerControllers = require('../controllers/costumerControllers')
const accountControllers =  require('../controllers/accountControllers')
const costumerAuth = require('../middlerwares/authentication')

route.post('/customers/register', costumerControllers.register)
route.get('/customers', costumerControllers.showCustomers)

route.use(costumerAuth)
route.post('/customers/newAccount', accountControllers.newAccount)

module.exports = route