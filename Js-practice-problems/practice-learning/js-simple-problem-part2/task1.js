// js-problems-part2-practice-tasks
// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];



const numbers = [167, 190, 120, 165, 137];

function lowestNumber(numbers) {
    let lowest = numbers[0];
    for (const number of numbers) {
        if (lowest > number) {
            lowest = number;
        }
    }
    return lowest;
}

const result = lowestNumber(numbers);
console.log(result);
// task 1 completed
