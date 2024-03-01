const _repository = require('../repository/transactionRepository');
const express = require('express');
const router = express.Router();

router.get('/total_amount', async (req, res) => {
    try {
        const totalAmount = await _repository.getTotalAmount();
        if (totalAmount === undefined || Object.keys(totalAmount).length === 0) {
            return res.status(401).json({ message: "Total amount not found" });
        } else {
            return res.status(200).json(totalAmount[0]['total_amount']);
        }
    } catch (err) {
        return res.status(500).json({ message: "Error fetching total amount" });
    }
});

router.get('/account_total_amount/:account_id', async (req, res) => {
    try {
        const totalAmount = await _repository.getTotalAmountByAccountId(req.params.account_id);
        if (totalAmount === undefined || Object.keys(totalAmount).length === 0) {
            return res.status(401).json({ message: "Account not found" });
        } else {
            return res.status(200).json(totalAmount[0]['total_amount']);
        }
    } catch (err) {
        return res.status(500).json({ message: "Error fetching total amount" });
    }
});

router.get('/account_monthly_amount/:account_id', async (req, res) => {
    try {
        const monthlyTotalAmount = await _repository.getMonthlyTotalAmountByAccountId(req.params.account_id);
        if (monthlyTotalAmount === undefined || Object.keys(monthlyTotalAmount).length === 0) {
            return res.status(401).json({ message: "Account not found" });
        } else {
            return res.status(200).json(monthlyTotalAmount);
        }
    } catch (err) {
        return res.status(500).json({ message: "Error fetching monthly total amount" });
    }
});

router.get('/account_month_most_spent/:account_id', async (req, res) => {
    try {
        const monthMostSpent = await _repository.getMonthMostSpentByAccountId(req.params.account_id);
        if (monthMostSpent === undefined || Object.keys(monthMostSpent).length === 0) {
            return res.status(401).json({ message: "Account not found" });
        } else {
            return res.status(200).json(monthMostSpent[0]['month_name']);
        }
    } catch (err) {
        return res.status(500).json({ message: "Error fetching most spent month" });
    }
});

router.get('/top_3_cities/:account_id', async (req, res) => {
    try {
        const mostVisitedCities = await _repository.getMostVisitedCitiesByAccountId(req.params.account_id);
        if (mostVisitedCities === undefined || Object.keys(mostVisitedCities).length === 0) {
            return res.status(401).json({ message: "Account not found" });
        } else {
            return res.status(200).json(mostVisitedCities);
        }
    } catch (err) {
        return res.status(500).json({ message: "Error fetching most visited city" });
    }
});

module.exports = router;