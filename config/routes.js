const express = require('express')
const router = express.Router() 
const usersController = require('../app/controllers/usersController')

router.post('/users/register', usersController.register)


module.exports = router