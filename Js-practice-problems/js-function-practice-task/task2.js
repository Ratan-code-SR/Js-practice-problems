// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddAndEvenNumber(number) {
  
    if ( typeof number !== 'number' || typeof number === NaN) {
        return "not valid";
    }
    if (number % 2 === 0) {
        return number * 2;
    } else {
        return parseInt(number / 2);
    }
}

console.log(oddAndEvenNumber(11));

