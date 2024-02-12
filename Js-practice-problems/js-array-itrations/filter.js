const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = numbers.filter(myFunction);

function myFunction(value) {
    return value % 2 === 0;
}
console.log(even);