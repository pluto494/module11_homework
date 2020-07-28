function getPrimeComplexNumber(elem){
    if (elem > 1000) {
        console.log ("Введено слишком большое число!");
    } else if (elem <= 1) {
        console.log('Введенное число является ни простым, ни составным.');
    } else if ((elem % 2 == 0) && (elem != 2)) {
        console.log('Составное число!');
    } else {
        console.log('Простое число!');
    }
};

getPrimeComplexNumber(5);


// сделал два варианта, скажите пожалуйста какой предпочтительнее?

function getPrimeComplexNumber(elem) {
    let result;
    if (elem > 1000) {
        result = console.log("Введено слишком большое число!");
    } else if (elem <= 1) {
        result = console.log("Введенное число является ни простым, ни составным.");
    } else if ((elem % 2 == 0) && (elem != 2)) {
        result = console.log("Составное число!");
    } else {
        result = console.log("Простое число!");
    }
    return result;
};