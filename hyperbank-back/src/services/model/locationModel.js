class Location {
    constructor(location_id, city) {
        if (location_id === null || location_id === undefined)
            throw new Error('Invalid Location ID!')

        if (city === null || city === undefined || city === '')
            throw new Error('Invalid City!')

        this._location_id = location_id;
        this._city = city;
    }
}

module.exports = { Location };