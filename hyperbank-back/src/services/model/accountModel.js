class Account {
    constructor(account_id, user_id, balance) {
        if (account_id === null || account_id === undefined || account_id === '')
            throw new Error('Invalid Account ID!')

        if (user_id === null || user_id === undefined || user_id === '')
            throw new Error('Invalid User ID!')

        if (balance === null || balance === undefined || balance === '')
            throw new Error('Invalid Balance!')

        this._account_id = account_id;
        this._user_id = user_id;
        this._balance = balance;
    }
}

module.exports = { Account };