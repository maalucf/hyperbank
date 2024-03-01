class Transaction {
    constructor(transaction_id, account_id, amount, date, location_id, category_id, method_id) {
        if (transaction_id === null || transaction_id === undefined || transaction_id === '')
            throw new Error('Invalid Transaction ID!')

        if (account_id === null || account_id === undefined || account_id === '')
            throw new Error('Invalid Account ID!')

        if (amount === null || amount === undefined)
            throw new Error('Invalid Amount!')

        if (date === null || date === undefined || date === '')
            throw new Error('Invalid Date!')

        if (location_id === null || location_id === undefined)
            throw new Error('Invalid Location ID!')

        if (category_id === null || category_id === undefined)
            throw new Error('Invalid Category ID!')

        if (method_id === null || method_id === undefined)
            throw new Error('Invalid Method ID!')

        this._transaction_id = transaction_id;
        this._account_id = account_id;
        this._amount = amount;
        this._date = date;
        this._location_id = location_id;
        this._category_id = category_id;
        this._method_id = method_id;
    }
}

module.exports = { Transaction };