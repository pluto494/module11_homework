function value(number) {
    let result;
    result = function() {
        return number + number;
    }
    return result;
};

let sum = value(9);
console.log(sum());

// так же два варианта.

let sum = function(number) {
    return console.log(number + number);
};


sum(9);