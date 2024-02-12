// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0


// function count(numbers) {
//    let find = [];
//    for(const number of numbers){
//     if(number === 5){
//         find.push(number);
//     }
//    }
//    return find.length;
// }

// const numbers = [5, 6, 11, 12, 98, 5];
// console.log(count(numbers));

/* ------------------------------------------ */
// function countOfNumber(target, numbers) {
//     let count = 0;
//     for (const number of numbers) {
//         if (number === target) {
//             count++;
//         }
//     }
//     return count;
// }

// const numbers = [5, 6, 11, 12, 98, 5];
// let target = 5;
// console.log(countOfNumber(target, numbers));

/* ----------------------------------- */
function countOfNumber(target, numbers) {
    let count = 0;
    for (const number of numbers) {
        if (number === target) {
            count++;
        }
    }
    return count;
}

const numbers = [5, 6, 11, 12, 98, 5];
let target = 25;
console.log(countOfNumber(target, numbers));