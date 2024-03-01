const _repository = require('../repository/methodRepository');
const express = require('express');
const router = express.Router();

router.get('/method_count/:account_id', async (req, res) => {
    try {
        const methods = await _repository.getAllMethodsCountByAccountId(req.params.account_id);
        if (methods === undefined || Object.keys(methods).length === 0) {
            return res.status(401).json({ message: "Account not found" });
        } else {
            return res.status(200).json(methods);
        }
    } catch (err) {
        return res.status(500).json({ message: "Error counting all methods" });
    }
});

module.exports = router;