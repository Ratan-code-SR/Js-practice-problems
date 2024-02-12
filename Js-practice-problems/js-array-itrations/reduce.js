const numbers = [2,3,4,5,6,7,8,6,5,4,3];
// const numbers = ['ratan','ribek','sumon'];
const result = numbers.reduceRight(myFunction);

function myFunction (total,value){
    return total + value;
}

console.log(result);