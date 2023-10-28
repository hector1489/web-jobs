const db = require('../database/db')

const verifyCredentials = async (email, pass) => await db('SELECT * FROM users WHERE email = $1 AND pass = $2;', [email, pass])

module.exports = {
    verifyCredentials
}


