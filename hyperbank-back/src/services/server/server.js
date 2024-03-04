const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')

//Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.static(path.join(__dirname, '../../../../hyperbank-front/build')));

//Routes
app.use('/', require('../controller/loginController'));
app.use('/', require('../controller/userController'));
app.use('/', require('../controller/accountController'));
app.use('/', require('../controller/incomeController'));
app.use('/', require('../controller/methodController'));
app.use('/', require('../controller/categoryController'));
app.use('/', require('../controller/transactionController'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../../hyperbank-front/build/index.html'));
});

app.listen(5000, () => console.log('Server running on port 5000'));

module.exports = app;