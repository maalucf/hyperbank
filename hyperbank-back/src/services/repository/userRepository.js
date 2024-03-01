const pool = require("../database/db");

async function getUserByPassAndCpf(cpf, password) {
    const query = `SELECT * FROM User WHERE cpf = ? AND password = ?`;
    
    try {
        const [rows] = await pool.query(query, [cpf, password]);
        return rows;
    } catch (err) {
        return err;
    }
}

async function getUserIdByCpf(cpf) {
    const query = `SELECT user_id FROM User WHERE cpf = ?`;
    
    try {
        const [rows] = await pool.query(query, [cpf]);
        return rows;
    } catch (err) {
        return err;
    }
}

async function getUserNameByCpf(cpf) {
    const query = `SELECT name FROM User WHERE cpf = ?`;
    
    try {
        const [rows] = await pool.query(query, [cpf]);
        return rows;
    } catch (err) {
        return err;
    }
}

module.exports = { 
    getUserByPassAndCpf,
    getUserIdByCpf,
    getUserNameByCpf
}