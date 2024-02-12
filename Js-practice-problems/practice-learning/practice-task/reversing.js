function reverse(text) {
    let strArr = text.split("");
    let rev = "";
    for (let i = strArr.length - 1; i >= 0; i--) {
        rev += strArr[i];
    }
    return rev;


}


let text = "Hello";
let result = reverse(text);
console.log(result);