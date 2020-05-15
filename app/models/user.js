const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        type: String, 
        required: true, 
        minlength: 6,
        maxlength: 64,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true 
    }, 
    password: {
        type: String, 
        required: String,
        minlength: 8,
        maxlength: 128
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User