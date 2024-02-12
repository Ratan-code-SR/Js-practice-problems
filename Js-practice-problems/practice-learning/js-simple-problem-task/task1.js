// js-problems-part1-practice-tasks
// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

// °F = °C × (9/5) + 32
const celToFah = (c)=>{
const F =  c * (9/5) + 32;
return F;
}

let c = celToFah(100);
console.log(c);