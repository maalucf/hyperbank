const _repository = require('../repository/userRepository');
const express = require('express');
const router = express.Router();

router.get('/user_id/:cpf', async (req, res) => {    
    try {
        const user = await _repository.getUserIdByCpf(req.params.cpf);
        
        if (user === undefined || Object.keys(user).length === 0) {
            return res.status(401).json({ message: "User not found" });
        } else {
            return res.status(200).json(user[0]['user_id']);
        }
    } catch (err) {
        return res.status(500).json({ message: "Error fetching user id" });
    }
});

router.get('/user_name/:cpf', async (req, res) => {
    try {
        const user = await _repository.getUserNameByCpf(req.params.cpf);
        if (user === undefined || Object.keys(user).length === 0) {
            return res.status(401).json({ message: "User not found" });
        } else {
            return res.status(200).json(user[0]['name']);
        }
    } catch (err) {
        return res.status(500).json({ message: "Error fetching user name" }); 
    }
});

module.exports = router;