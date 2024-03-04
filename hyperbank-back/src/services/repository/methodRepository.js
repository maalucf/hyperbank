const pool = require("../database/db");

async function getAllMethodsCountByAccountId(account_id) {
    const query = `SELECT M.name, COUNT(T.method_id) AS method_count
        FROM Method M
        LEFT JOIN Transaction T ON T.method_id = M.method_id AND T.account_id = ?
        GROUP BY M.name;
        `;

    try {
        const [rows] = await pool.query(query, [account_id]);
        return rows;
    } catch (err) {
        return err;
    }
}

module.exports = { getAllMethodsCountByAccountId }