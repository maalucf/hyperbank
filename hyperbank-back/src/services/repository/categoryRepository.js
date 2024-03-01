const pool = require("../database/db");

async function getAllCategoriesCountByAccountId(account_id) {
    const query = `SELECT C.name, COUNT(T.category_id) AS category_count
        FROM Transaction T
        JOIN Category C ON T.category_id = C.category_id
        WHERE T.account_id = ?
        GROUP BY C.name;`;

    try {
        const [rows] = await pool.query(query, [account_id]);
        return rows;
    } catch (err) {
        return err;
    }
}

module.exports = { getAllCategoriesCountByAccountId }