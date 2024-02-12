
function password(obj) {
    if (!obj.name || !obj.birthYear || !obj.siteName) {
        return 'invalid';
    }
    else if (obj.birthYear.toString().length !== 4) {
        return "invalid"
    }
const slice = obj.name;
let result = slice.substring(3,0);
console.log(result);



    const  findSiteName = obj.siteName;
    const arr = findSiteName.split(" ");
    let container = " ";
    for (const letter of arr) {
        container += letter[0].toUpperCase() + letter.toLowerCase().slice(1);
    }
    return `${container.trim()}#${result}@${obj.birthYear}`
}

console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));
console.log(password({ birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "rahat" , birthYear: 2002, siteName: "Facebook" }));

