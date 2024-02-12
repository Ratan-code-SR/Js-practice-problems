

function checkName(name) {
    if (typeof name !== "string") {
        return "invalid"
    }
    const findLastChr = name.charAt(name.length - 1);
    const match = findLastChr.match(/[Ayieouw]/gi);
    if (match) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}
console.log(checkName('Salman'));
console.log(checkName('RAFEE'));
console.log(checkName('Jhankar'));
console.log(checkName(199));
console.log(checkName(['Rashed']));

