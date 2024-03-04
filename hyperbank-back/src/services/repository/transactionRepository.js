const pool = require("../database/db");

async function getTotalAmountByAccountId(account_id) {
    const query = `SELECT SUM(amount) AS total_amount
        FROM Transaction
        WHERE account_id = ?;`;

    try {
        const [rows] = await pool.query(query, [account_id]);
        return rows;
    } catch (err) {
        return err;
    }
}

async function getMonthlyTotalAmountByAccountId(account_id) {
    const query = `SELECT MONTHNAME(date) AS month_name, SUM(amount) AS total_spent
        FROM Transaction
        WHERE account_id = ?
        GROUP BY month_name;`;

    try {
        const [rows] = await pool.query(query, [account_id]);
        return rows;
    } catch (err) {
        return err;
    }
}

async function getMonthMostSpentByAccountId(account_id) {
    const query = `SELECT MONTHNAME(date) AS month_name
        FROM Transaction
        WHERE account_id = ?
        GROUP BY month_name
        ORDER BY SUM(amount) DESC
        LIMIT 1;`;

    try {
        const [rows] = await pool.query(query, [account_id]);
        return rows;
    } catch (err) {
        return err;
    }
}

async function getMostVisitedCitiesByAccountId(account_id) {
    const query = `SELECT city, COUNT(*) AS visit_count
        FROM Transaction
        WHERE account_id = ?
        GROUP BY city
        ORDER BY visit_count DESC
        LIMIT 3;`;

    try {
        const [rows] = await pool.query(query, [account_id]);
        return rows;
    } catch (err) {
        return err;
    }
}

async function getAccountsCountLargerThan(account_id) {
    const query = `SELECT
        COUNT(*) AS total_accounts,
        SUM(CASE WHEN total_amount >= specific_account_total THEN 1 ELSE 0 END) AS larger_or_equal_to_specific
        FROM (
                SELECT SUM(amount) AS specific_account_total
                FROM Transaction
                WHERE account_id = ?
            ) AS specific_account_total,
            (
                SELECT account_id, SUM(amount) AS total_amount
                FROM Transaction
                GROUP BY account_id
            ) AS total_amounts;`
    
    try {
        const [rows] = await pool.query(query, [account_id]);
        return rows;
    } catch (err) {
        return err;
    }       
}

module.exports = {
    getTotalAmountByAccountId,
    getMonthlyTotalAmountByAccountId,
    getMostVisitedCitiesByAccountId,
    getMonthMostSpentByAccountId,
    getAccountsCountLargerThan
}