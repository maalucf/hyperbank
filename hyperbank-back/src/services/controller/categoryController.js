const _repository = require('../repository/categoryRepository');
const express = require('express');
const router = express.Router();

router.get('/category_count/:account_id', async (req, res) => {
    try {
        const categories = await _repository.getAllCategoriesCountByAccountId(req.params.account_id);
        if (categories === undefined || Object.keys(categories).length === 0) {
            return res.status(401).json({ message: "Account not found" });
        } else {
            return res.status(200).json(categories);
        }
    } catch (err) {
        return res.status(500).json({ message: "Error counting all categories" });
    }
});

module.exports = router;