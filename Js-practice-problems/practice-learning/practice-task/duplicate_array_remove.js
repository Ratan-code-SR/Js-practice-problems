const array = ["ratan", "kobita", "sumita", "ritesh", "ratan", "kobita"];

function noDuplicate(array) {
    let unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    let len = unique.length;
    return {unique, len};
}


console.log(noDuplicate(array));


