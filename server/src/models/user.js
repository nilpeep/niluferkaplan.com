"use strict"

const { set } = require('mongoose')
const { mongoose: {Schema, model} } = require('../configs/dbConnection')
const { role } = require('../constraints/role&status')
const {passwordValidation, emailValidation} = require('../helpers/userValidation')
const { type } = require('os')

//? User Model:
const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true
    },
    password:{
        type: String,
        required: true,
        trim: true,
        set: password => passwordValidation(password)
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        set: email => emailValidation(email)
    },
    role:{
        type: Number,
        required: true,
        trim: true,
        enum: {
            message:"user enter valid role",
            values: Object.keys(role).map(key => Number(key))
        }
    },
    isActive:{
        type: Boolean,
        default: true
    }
},{
    collection:'users',
    timestamps: true
})

module.exports = model('User', UserSchema)




