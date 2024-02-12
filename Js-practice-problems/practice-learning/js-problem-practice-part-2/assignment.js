function cubeNumber(number) {
    return Math.pow(number, 3)
}
// var three = 3;
// var cubed = cubeNumber(three);
// var four = 4;
// var cubed = cubeNumber(four);


function matchFinder(string1, string2) {
    return string1.includes(string2)
}
// const string1 = 'John Doe'
// const string2 = 'ohn';
// const result = matchFinder(string1, string2);
function matchFinder(string3, string4) {
    return string3.includes(string4)
}
// const string3 = 'Java Script';
// const string4 = 'Code';
// const result2 = matchFinder(string3, string4);
function matchFinder(string5, string6) {
    return string5.includes(string6)
}
// const string5 = 'Peter Parker';
// const string6 = 'Pen';
// const result3 = matchFinder(string5, string6);
function matchFinder(string7, string8) {
    return string7.includes(string8)
}
// const string7 = 'Peter Parker';
// const string8 = 'Pet';
// const result4 = matchFinder(string7, string8);

function sortMarker(a, b) {
    if (a < 0 || b < 0) {
        return 'Invalid Output'
    }
    else if (a == b) {
        return 'Equal'
    }
    else {
        var min = Math.min(a, b);
        var max = Math.max(a, b);
        return [max, min];
    }


}
function findAddress(find) {
    var addresses = "" + find.street + ", " + find.house + ", " + find.society + "";
    return addresses;
}
// const address1Find = {
// street: 10,
// house: "154",
// society: "Earth Perfect",
// }
// const streetFind = {
// street: 10,
// house: "_",
// society: "Earth Perfect"
// }
// const societyFind = {
// street: '_',
// house: "_",
// society: "Earth Perfect"
// }
function canPay(changeArray, totalDue) {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        sum += changeArray[i]
    }
    if (sum >= totalDue) {
        if (!changeArray.length) {
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
}
// var changeArray = [1, 2, 3]
// var totalDue = 10;
// var sum = (1 + 2 + 3)
// var result = canPay(changeArray, totalDue)
// var changeArray = [1, 5, 5]
// var totalDue = 10;
// var sum = (1 +5 + 5)
// var result2 = canPay(changeArray, totalDue)