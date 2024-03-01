class Method {
    constructor(method_id, name) {
        if (method_id === null || method_id === undefined)
            throw new Error('Invalid Method ID!')

        if (name === null || name === undefined || name === '')
            throw new Error('Invalid Name!')

        this._method_id = method_id;
        this._name = name;
    }
}

module.exports = { Method };