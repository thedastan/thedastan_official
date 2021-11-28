let module
module.exports = function getLoveTrianglesCount(preferences = []) {

    let count = 0
    for (let i = 0; i < preferences.length; i++) {
        let number = preferences[i] - 1
        let secondnumber = preferences[number] - 1
        let lastnumber = preferences[secondnumber] - 1
        if (lastnumber === secondnumber) continue;
        if ((lastnumber) === i) {
            count++
        }
    }
    return count / 3
}


module.exports = function makeExchange(currency) {
    let result = {
        "H": 50,
        "Q": 25,
        "D": 10,
        "N": 5,
        "P": 1
    }
    if (currency > 10000) {
        return {error: "You are rich, my friend!"}
    }
    if (currency < 1) {
        return {}
    }

    result.H = Math.floor(currency / 50)
    currency = currency - (result.H * 50)
    result.Q = Math.floor((currency / 25))
    currency = currency - (result.Q * 25)
    result.D = Math.floor((currency / 10))
    currency = currency - (result.D * 10)
    result.N = Math.floor((currency / 5))
    currency = currency - (result.N * 5)
    result.P = Math.floor((currency))
    for (let key in result) {
        if (result[key] === 0) {
            delete result[key]
        }
    }
    return result


}
