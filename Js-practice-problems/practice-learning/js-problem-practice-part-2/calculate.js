
// const products = [
//     { name: "headphone", price: 500 },
//     { name: "glass", price: 400 },
//     { name: "mobile", price: 200 },
//     { name: "apple", price: 100 },
//     { name: "7 up", price: 350 },
// ];
// const totalPrice = (products) => {
//     let total = 0;
//     for (const price of products) {
//         total += price.price;
//     }
//     return total;
// }
// const total = totalPrice(products)
// console.log(`total price of products : ${total}`);

const products = [
    { name: "headphone", price: 500, quantity: 5 },
    { name: "glass", price: 400, quantity: 3 },
    { name: "mobile", price: 200, quantity: 2 },
    { name: "apple", price: 100, quantity: 4 },
    { name: "7 up", price: 350, quantity: 7 },
];

const totalPrice = (products) => {
    let total = 0;
    for (const product of products) {
        const totalPriceOfSingleProduct = product.price * product.quantity;
        total += totalPriceOfSingleProduct;
    }
    return total;
}


const total = totalPrice(products)
console.log(`total price of products : ${total}`);