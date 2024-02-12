// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

const products = [
    { name: 'laptop', price: 35000, quantity: 2 },
    { name: 'tablet', price: 35000, quantity: 2 },
    { name: 'mobile', price: 35000, quantity: 2 },
];

function calculateElectronicsBudget(products) {
    let total = 0;
    for (const product of products) {
        total += product.price * product.quantity;
    }
    return total;
}

let result = calculateElectronicsBudget(products);
console.log(result);

// task3 is done 
