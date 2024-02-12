
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num =' ';
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    num += value * 2 + " ";
}
console.log( num); // forEach is do not return value;