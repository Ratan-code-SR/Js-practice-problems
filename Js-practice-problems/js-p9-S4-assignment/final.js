function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Your number is invalid! Please provide positive number.";
    }
    const ticketPrice = 120;
    const janitorCost = 500;
    const staffCost = 50 * 8;

    const revenue = (ticketSale * ticketPrice) - (janitorCost + staffCost);
    return revenue;
}


function checkName(name) {
    if (typeof name !== "string") {
        return "invalid"
    }
    const findLastChr = name.charAt(name.length - 1);
    const checkedLastChr = findLastChr.match(/[aeiouyw]/gi);
    if (checkedLastChr) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}



function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "invalid";
    }
    let num = [];
    let result = [];
    for (const numbers of array) {
        if (typeof numbers == "number") {
            num.push(numbers);
        }
    }
   for(const x of num){
    if(x){
        result.push(x);
    }
   }
   return result;
}


function password(obj) {
    if (!obj.name || !obj.birthYear || !obj.siteName) {
        return 'invalid';
    }
    else if (obj.birthYear.toString().length !== 4) {
        return "invalid"
    }
    const findSiteName = obj.siteName;
    const arr = findSiteName.split(" ");
    let container = " ";
    for (const letter of arr) {
        container += letter[0].toUpperCase() + letter.toLowerCase().slice(1);
    }
    return `${container.trim()}#${obj.name}@${obj.birthYear}`;
}


function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== "number") {
        return "invalid input";
    }
    let bigEarn = 0;
    let smallEarn = 0;
    for (const money of arr) {
        if (money >= 3000) {
            bigEarn += money - money * 20 / 100;
        } else {
            smallEarn += money;
        }
    }
    
    const totalEarning = bigEarn + smallEarn;
    const saving = totalEarning - livingCost;
    if (saving >= 0) {
        return saving;
    } else {
        return "earn more";
    }
}
