// задание 11.2.1

let array = [1,3,4,5,"1,2","ab",8,null,0,NaN,68];
let someArray = [1,4,4,4,8,10,0,1,7,9,97];
let anyArray = [2,null,88,100,'ab',44,32,1,true,0];

function getEvenOddDetection(arr) {
    let even = 0, odd = 0, zero = 0;
    arr.forEach((elem) => {
        if (typeof elem === "number" && isFinite(elem)) {
            if (elem == 0) {
                zero++;
            } else if (elem % 2 == 0) {
                even++;
            } else {
                odd++;
            }
        }
    });
    console.log(`Zero elements: ${zero}, even elements: ${even}, odd elements: ${odd}`);
};

getEvenOddDetection(anyArray);

