const express = require('express')
const cors = require('cors')
const app = express()

//Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors({ origin: 'http://localhost:3000' }));

//Routes
app.use('/', require('../controller/loginController'));
app.use('/', require('../controller/userController'));
app.use('/', require('../controller/accountController'));
app.use('/', require('../controller/incomeController'));
app.use('/', require('../controller/methodController'));
app.use('/', require('../controller/categoryController'));
app.use('/', require('../controller/transactionController'));

app.listen(5000, () => console.log('Server running on port 5000'));

module.exports = app;