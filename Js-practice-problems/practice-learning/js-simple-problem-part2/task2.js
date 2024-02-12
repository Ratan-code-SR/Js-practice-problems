// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function smallestName(names) {

    let len = names[0];
    for (const name of names) {
        // console.log(name);
        if (len.length > name.length) {
            len = name;
        }
    }
    return len;
}

const result = smallestName(names);
console.log(result);
// task2 is done