// Find the Longest Word:
// Write a function that takes a sentence as input and returns the longest word in the sentence
// function sentence(text1, text2) {

//     if (text1.length > text2.length) {
//         return text1;
//     }
//     else {
//         return text2;
//     }
// }


// let text1 = "this is ratan chakma";
// let text2 = "hello world";

// console.log(sentence(text1, text2));
// function sentence(text1) {
//     let word = text1.split(" ");
//     let longestWord = '';
//     for(let i = 0; i<word.length; i++){
//         if(word[i].length > longestWord.length){
//             longestWord = word[i];
//         }
//     }
//     return longestWord

// }
// let text1 = "this is ratan chakma";

// console.log(sentence(text1));



function sentence(text){
let singleWord = text.split(" ");
let longestWord = " ";
for(let i = 0; i<singleWord.length; i++){
    if(singleWord[i].length > longestWord.length){
        longestWord = singleWord[i];
    }
}
return longestWord;

}



let text = "I am ratan chakma. I am a web developer from bangladesh";
console.log(sentence(text));