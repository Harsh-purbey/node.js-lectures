function sum(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

// module.exports is {}  which you pass here that is accesible at the time of require

// module.exports =  sum ;
// module.exports =  subtract ;

// module.exports = { sum, subtract }

exports.sum = sum;
exports.subtract = subtract;