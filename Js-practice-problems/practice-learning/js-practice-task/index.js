// js-problems-part2-practice-tasks
// Task -1:
// Find the lowest number in the array below.

// const numbers = [167, 190, 120, 165, 137];
// function findLowestNumber (numbers) {

//     let lowest = numbers[0];
//     for(const number of numbers){
//         if(lowest > number){
//             lowest = number;
//         }
//     }
//     return lowest;
// }

// const result = findLowestNumber (numbers);
// console.log(result);

/* ------------------------------- */
// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// find = 5;
// sample-input: numbers = [5,6,11,12,98, 5]

const numbers = [5, 6, 11, 12, 98,5,5];
function findNumber(numbers) {
    const target = 5;
    let repeatedNumber = 0;
    for (const number of numbers) {
        if (number == target) {
            repeatedNumber++;
        }
    }
    if (repeatedNumber == 1) {
        return "not found duplicated number";
    }
    return repeatedNumber;
}
const result = findNumber(numbers);
console.log(result);
/* ------------------------------ */

// Task-3:
// Write a function to count the number of vowels in a string.

// function countVowelNumbers(sentence) {
//     let vowels = 'aeiou';
//     let count = 0;
//     for (const word of sentence) {
//         if (vowels.includes(word.toLowerCase()) === true) {
//             count++;
//         }
//     }
//     if(count === 0){
//         return 'not find vowels this sentence';
//     }
//     return count;
// }
// const sentence = 'trsth';
// const result = countVowelNumbers(sentence);
// console.log(result);




