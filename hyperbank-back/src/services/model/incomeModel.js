class Income {
    constructor(income_id, account_id, amount, date, description) {
        if (income_id === null || income_id === undefined || income_id === '')
            throw new Error('Invalid Income ID!')

        if (account_id === null || account_id === undefined || account_id === '')
            throw new Error('Invalid Account ID!')

        if (amount === null || amount === undefined || amount === '')
            throw new Error('Invalid Amount!')

        if (date === null || date === undefined || date === '')
            throw new Error('Invalid Date!')

        this._income_id = income_id;
        this._account_id = account_id;
        this._amount = amount;
        this._date = date;
        this._description = description;
    }
}

module.exports = { Income };