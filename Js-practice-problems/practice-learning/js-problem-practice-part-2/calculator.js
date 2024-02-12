
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

function calculate(a, b, operation) {
    if (operation === 'add') {
        return add(a, b);
    }
    else if (operation === 'subtract') {
        return subtract(a, b);
    }
    else if (operation === 'multiply') {
        return multiply(a, b);
    }
    else if (operation === 'divide') {
        return divide(a, b);
    }
    else {
        return "not calculate";
    }

}

console.log(calculate(4,5,'add'));
console.log(calculate(3,4,'add'));