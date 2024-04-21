"use strict"

const { set } = require('mongoose')
const { mongoose}  = require('../configs/dbConnection')
const { role } = require('../constraints/role&status')
const {passwordValidation, emailValidation} = require('../helpers/userValidation')
const { type } = require('os')

//? User Model:
const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true
    },

    password: {
        type: String,
        trim: true,
        required: true
    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true,
        // validate: ... // validasyon işlemini pre(save) yapıyor.
    },

    firstName: {
        type: String,
        trim: true,
        required: true
    },

    lastName: {
        type: String,
        trim: true,
        required: true
    },

    isActive: {
        type: Boolean,
        default: true,
    }

}, {
    collection: 'users',
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)




