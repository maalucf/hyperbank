class User {
    constructor(cpf, name, password, email) {
        if (cpf === null || cpf === undefined || cpf === '')
            throw new Error('Invalid CPF!')

        if(name === '' || name === null || name === undefined)
            throw new Error('Invalid Name!')

        if(password === '' || password === null || password === undefined)
            throw new Error('Invalid Password!')
        
        if(email === '' || password === null || password === undefined)
            throw new Error('Invalid Email!')

        this._cpf = cpf;
        this._name = name;
        this._password = password;
        this._email = email;
    }
}

module.exports = { User };