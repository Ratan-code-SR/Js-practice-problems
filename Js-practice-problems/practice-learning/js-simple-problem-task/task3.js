// Task-3:
// Write a function to count the number of vowels in a string.


// function countVowels(sentence) {
//     let count = 0;
//     for (const text of sentence) {
//         if (text ===
//              "a" || text === "e" || text === "i" || text === "o" || text === "u") {
//             count++;
//         }
//     }
//     return count;
// }
// const sentence = "my name is ratan chakma. I am a web developer from bangladesh";
// console.log(countVowels(sentence));

function countVowels(sentence) {
    let count = 0;
    let vowels = "aeiou";  
    for (const text of sentence.toLowerCase()) {
       if(vowels.includes(text) === true){
        count ++;
       }
    }
    return count;
}
const sentence = "my name is ratan chakma. I am a web developer from bangladesh";
console.log(countVowels(sentence));