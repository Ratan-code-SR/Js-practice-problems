function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "invalid";
    }
    let num = [];

    for (const numbers of array) {
        if (typeof numbers == "number" && !isNaN(numbers)) {
            num.push(numbers);
        }
    }
   return num;

}

console.log(deleteInvalids([1, null,NaN, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
console.log(deleteInvalids([1, 2, -3]));
console.log(deleteInvalids(["1" , {num:2} , NaN ]));
console.log(deleteInvalids({ num: [1, 2, 3] }));


