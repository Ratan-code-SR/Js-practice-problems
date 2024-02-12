
const numbers = [60, 45, 67, 54, 32, 34, 99, 89, 13, 40];

function getHeight(numbers) {
    let max = numbers[0];
    for (const number of numbers) {
        if (max < number) {
            max = number;
        }
    }
    return max;
}
let result = getHeight(numbers);
console.log(result);