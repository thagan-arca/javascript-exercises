const repeatString = function() {
    const str = arguments[0];
    const num = arguments[1];

    let response = '';

    if (num < 0) {
        return 'ERROR';
    }

    for (let i = 0; i < num; i++) {
        response += str;
    }

    return response

};

// Do not edit below this line
module.exports = repeatString;
