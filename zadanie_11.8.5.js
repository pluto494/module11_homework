const getExponentiation = (x, n) => {
    const result = Math.pow(x, n);
    return console.log(result);
}

getExponentiation(3, 2);

// Задание засчитано, но есть замечание: конструкция return console.log(result) не имеет смысла. Нужно либо просто использовать console.log, либо написать return result и затем уже вывести в консоль результат выполнения функции: console.log(getExponentiation(3, 2));