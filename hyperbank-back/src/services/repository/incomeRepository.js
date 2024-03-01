const pool = require("../database/db");

async function getTotalIncomeByAccountId(account_id) {
    const query = `SELECT SUM(amount) AS total_income
        FROM Income
        WHERE account_id = ? AND amount > 0;`;

    try {
        const [rows] = await pool.query(query, [account_id]);
        return rows[0];
    } catch (err) {
        return err;
    }
}

module.exports = { getTotalIncomeByAccountId }