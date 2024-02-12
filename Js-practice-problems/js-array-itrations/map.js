// const numbers = [2,3,4,5,6,7,8,9,10];

// const myFunction = (value,index,array)=>{
// return value * 3;
// }
// const result = numbers.map(myFunction);
// console.log(result);


const numbers = [2,3,4,5,6,7,8,9,10];
const result = numbers.map(myFunction);

function myFunction (value,index,array){
return value * 3;
}

console.log(result);