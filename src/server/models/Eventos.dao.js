const db = require('../database/db')

const findUsuarios = async () => await db('SELECT * FROM users;')

const findUsuarioByEmail = async (email) => await db('SELECT * FROM users WHERE email = $1;', [email])

const createUsuario = async ({ email, pass, rol, lenguage }) => {
    const query = 'INSERT INTO users (email, pass, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *;'
    const values = [email, pass, rol, lenguage]
    return await db(query, values)
}

const updateUsuario = async (id, { email, pass, rol, lenguage }) => {
    const query = 'UPDATE users SET email = $2, pass = $3, rol = $4, lenguage = $5 WHERE id = $1 RETURNING *;'
    const values = [id, email, pass, rol, lenguage]
    return await db(query, values)
}

const deleteUsuario = async (id) => await db('DELETE FROM users WHERE id = $1 RETURNING *;', [id])

module.exports = {
    findUsuarios,
    findUsuarioByEmail,
    createUsuario,
    updateUsuario,
    deleteUsuario
}
