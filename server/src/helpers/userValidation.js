"use strict";
const passwordEncrypt = require("./passwordEncrypt")
const passwordValidation = (password) =>{
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if(passwordRegex.test(password)){
        return passwordEncrypt(password)
    }else{
        throw new Error("Password must be at least 8 characters, one uppercase, one lowercase, one number and one special character")
    }

}

const emailValidation = (email) =>{
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(emailRegex.test(email)){
        return email
    }else{
        throw new Error("Invalid email")
    }
}

module.exports = {passwordValidation, emailValidation}

