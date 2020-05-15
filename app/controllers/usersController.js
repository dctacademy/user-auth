const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const usersController = {}

usersController.register = (req, res) => {
    const body = req.body 
    const user = new User(body)
    bcryptjs.genSalt()
        .then((salt) => {
            bcryptjs.hash(user.password, salt)
                .then((encrypted) => {
                    user.password = encrypted
                    user.save()
                        .then((user) => {
                            res.json(user)
                        })
                        .catch((err) => {
                            res.json(err)
                        })
                })
        })
   
        
    /*
    const user = new User()
    user.username = body.username 
    user.email = body.email
    user.password = body.password
    */
}


module.exports = usersController