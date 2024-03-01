const pool = require("../database/db");

async function getAllMethodsCountByAccountId(account_id) {
    const query = `SELECT M.name, COUNT(T.method_id) AS method_count
        FROM Transaction T
        JOIN Method M ON T.method_id = M.method_id
        WHERE T.account_id = ?
        GROUP BY M.name;`;

    try {
        const [rows] = await pool.query(query, [account_id]);
        return rows;
    } catch (err) {
        return err;
    }
}

module.exports = { getAllMethodsCountByAccountId }