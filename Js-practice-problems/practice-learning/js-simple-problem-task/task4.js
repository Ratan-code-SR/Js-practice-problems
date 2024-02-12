// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function findLongestWord(sentence) {
    let words = sentence.split(" ");
    let longest = " ";
    for (const word of words) {
        if (word.length > longest.length) { 
            longest = word;
        }
    }
    return longest;
}








const sentence = "I am learning Programming to become a programmer";
console.log(findLongestWord(sentence));