const _repository = require('../repository/incomeRepository');
const express = require('express');
const router = express.Router();

router.get('/total_income/:account_id', async (req, res) => {
    try {
        const income = await _repository.getTotalIncomeByAccountId(req.params.account_id);
        
        if (income === undefined || Object.keys(income).length === 0) {
            return res.status(401).json({ message: "Account not found" });
        } else {
            return res.status(200).json(income['total_income']);
        }
    } catch (err) {
        return res.status(500).json({ message: "Error fetching income" });
    }
});

module.exports = router;