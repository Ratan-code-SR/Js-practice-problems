// function getMax(num1,num2) {
//     if (num1 > num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// }

// console.log(getMax(12,45));

// max is  the three number
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return `big number is number 1 ${num1}`
    }
    else if (num2 > num1 && num2 > num3) {
        return `big number is number 2 ${num2}`
    } else {
        return `big number is number 3 ${num3}`
    }
}

console.log(maxOfThree(300,200,100));
