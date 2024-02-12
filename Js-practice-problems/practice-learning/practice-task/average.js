// function avg(numbers) {
//     let sum = 0;
//     for(let number of numbers){
//         sum += number;
//     }
//     return sum / numbers.length;

// }

// let numbers = [2, 34, 5, 6, 8, 9, 6];
// console.log(avg(numbers));

/* ----------------- */

// function avgOddNumber(numbers) {
//     let sumOfOdd = 0;
//     for (const number of numbers) {

//         if (number % 2 === 1) {
//             sumOfOdd += number;
//         }
//     }
//     return sumOfOdd / numbers.length;

// }

// let numbers = [23, 45, 67, 89, 64, 32, 12];
// let result = avgOddNumber(numbers);
// console.log(result);
/* ----------------- */

function avgOddNumber(numbers) {
    let odds = [];
    for (const number of numbers) {

        if (number % 2 === 1) {
            odds.push(number);
        }
    }

    let sum = 0;
    for (const number of odds) {
        sum += number;
    }
    let index = odds.length;
    const avg = sum / index;
    console.log(sum,index);
    return avg;

}

let numbers = [23, 45, 67, 89, 64, 32, 12];
let result = avgOddNumber(numbers);
console.log(result);