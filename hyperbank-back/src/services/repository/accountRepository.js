const pool = require("../database/db");

async function getTotalBalanceByUserId(user_id) {
    const query = `SELECT balance FROM Account WHERE user_id = ?;`;

    try {
        const [rows] = await pool.query(query, [user_id]);
        return rows;
    } catch (err) {
        return err;
    }
}

async function getAccountIdByUserId(user_id) {
    const query = `SELECT account_id FROM Account WHERE user_id = ?`;

    try {
        const [rows] = await pool.query(query, [user_id]);
        return rows;
    } catch (err) {
        return err;
    }
}

module.exports = { 
    getTotalBalanceByUserId,
    getAccountIdByUserId
}