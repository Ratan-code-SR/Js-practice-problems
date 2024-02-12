// const phones = [
//     { brand: "samsung", price: 30000, camera: "54mp", color: "black" },
//     { brand: "Iphone", price: 100000, camera: "54mp", color: "black" },
//     { brand: "walton", price: 25000, camera: "54mp", color: "black" },
//     { brand: "mi", price: 45000, camera: "54mp", color: "black" },
// ];

// function minPrice(phones) {
//     let min = phones[0];
//     for(const phone of phones){
//         if(phone.price < min.price){
//             min = phone;
//         }
//     }
//     return min;
// }

// console.log(minPrice(phones));

// max price;
const phones = [
    { brand: "samsung", price: 30000, camera: "54mp", color: "black" },
    { brand: "Iphone", price: 100000, camera: "54mp", color: "black" },
    { brand: "walton", price: 25000, camera: "54mp", color: "black" },
    { brand: "mi", price: 45000, camera: "54mp", color: "black" },
];

function minPrice(phones) {
    let min = phones[0];
    for(const phone of phones){
        if(min.price < phone.price){
            min = phone;
        }
    }
    return min;
}

console.log(minPrice(phones));



