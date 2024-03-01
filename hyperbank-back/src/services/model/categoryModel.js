class Category {
    constructor(category_id, name) {
        if (category_id === null || category_id === undefined)
            throw new Error('Invalid Category ID!')

        if (name === null || name === undefined || name === '')
            throw new Error('Invalid Name!')

        this._category_id = category_id;
        this._name = name;
    }
}

module.exports = { Category };