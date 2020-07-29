const getNumbersInBetween = function(a, b) {
  let i = a;
  while (i < b + 1) {
      console.log(i++);
  }
};

getNumbersInBetween(5,15)

const intervalId = setInterval(getNumbersInBetween, 1000, 5, 15);

const timeoutId = setTimeout(function() {
    clearInterval(intervalId);
}, 16000);

clearTimeout(timeoutId)


// два варианта цикла. так же не получается сделать чтоб каждую секунду появлялось следующее число.
// появляется сразу весь промежуток чисел с интвервалом в одну секунду.

const getNumbersInBetween = function(a, b) {
    for (i = a; i < b + 1; i++) {
        console.log(i);
    }
};


getNumbersInBetween(5,15)

const intervalId = setInterval(getNumbersInBetween, 1000, 5, 15);

const timeoutId = setTimeout(function() {
    clearInterval(intervalId);
}, 16000);

clearTimeout(timeoutId)

// В данном задании не нужно использовать цикл, будет достаточно setInterval, в котором при каждом повторении в консоль будет выводиться число, затем увеличиваться на 1 до тех пор, пока оно не будет равно конечному значению. Ниже верный вариант решения:

function logNumbers(begin, end) {
  let current = begin;

  let timerId = setInterval(function() {
    console.log(current);
    if (current == end) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

logNumbers(5, 15);
