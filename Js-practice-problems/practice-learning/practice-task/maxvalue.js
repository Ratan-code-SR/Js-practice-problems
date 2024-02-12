function findMaxValue(numbers) {

    if (Array.isArray(numbers)) {
        return Math.max(...numbers);
    }
    else {
        return null;
    }
}


let numbers = [23, 45, 67, 89, 75, 43];
console.log(findMaxValue(numbers));

