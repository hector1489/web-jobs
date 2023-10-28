require('dotenv').config()
const jwt = require('jsonwebtoken')

const KEY = process.env.JWT_SECRET_KEY

const jwtVerify = (token) => jwt.verify(token, KEY, (err, decoded) =>{
    if (err) throw err
    return decoded
})

const jwtSign = (payload) => jwt.sign(payload, KEY, { expiresIn: 60 * 5 }) //restriccion 5 min de loggin


module.exports = { jwtVerify, jwtSign}