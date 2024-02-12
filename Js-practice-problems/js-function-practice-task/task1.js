// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiply(num1, num2, num3, num4) {
    if (typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number" || typeof num4 !== "number" ){
        return 'not valid input';
    }
    return num1*num2*num3*num4;
}
console.log(multiply(3, 5,7,445));


