const mongoose = require('mongoose')
const validator = require('validator')
const userRole = require('../utils/userRoles')
const userRoles = require('../utils/userRoles')

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate:[ validator.isEmail,'filed must be a valid email address']
        
    },
    password:{
        type: String,
        required: true
    },
    token:{
        type:String
    },
    role:{
        type: String,
        enum: [userRoles.USER, userRoles.ADMIN, userRoles.MANGER],
        default: userRoles.USER
    },
    avatar:{
        type: String,
        default: 'uploads/profile.jpg'
    }
    // hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital' },

})

module.exports = mongoose.model('User', userSchema)
