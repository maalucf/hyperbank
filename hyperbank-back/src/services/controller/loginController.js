const _repository = require('../repository/userRepository');
const express = require('express');
const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const { cpf, password } = req.body;
        const user = await _repository.getUserByPassAndCpf(cpf, password);

        if (user !== undefined && Object.keys(user).length > 0) {
            const { cpf: c, password: pass } = user[0];
            if (c === cpf && pass === password) 
                return res.status(200).json({ redirect: "financialHighlights" });
        } else {
            return res.status(401).json({ message: "Incorrect CPF and/or password" });
        }
    } catch (err) {
        return res.status(500).json({ message: "Error logging in" });
    }
});

module.exports = router;