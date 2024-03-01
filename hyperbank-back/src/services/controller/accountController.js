const _repository = require('../repository/accountRepository');
const express = require('express');
const router = express.Router();

router.get("/balance/:user_id", async (req, res) => {
    try {
        const balance = await _repository.getTotalBalanceByUserId(req.params.user_id);

        if (balance !== undefined && Object.keys(balance).length > 0) {
            return res.status(200).json(balance[0]['balance']);
        } else {
            return res.status(401).json({ message: "User not found" });
        }
    } catch (err) {
        return res.status(500).json({ message: "Error getting balance" });
    }
});

router.get("/account_id/:user_id", async (req, res) => {
    try {
        const account = await _repository.getAccountIdByUserId(req.params.user_id);

        if (account !== undefined && Object.keys(account).length > 0) {
            return res.status(200).json(account[0]['account_id']);
        } else {
            return res.status(401).json({ message: "User not found" });
        }
    } catch (err) {
        return res.status(500).json({ message: "Error getting account" });
    }
});

module.exports = router;