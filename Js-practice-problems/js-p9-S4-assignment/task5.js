function monthlySavings(arr, livingCost) {

    if (!Array.isArray(arr) || typeof livingCost !== "number") {
        return "invalid input";
    }

    let earn = 0;
    let simple = 0;
    for (const num of arr) {
        if (num >= 3000) {
            earn += num - num * 20 / 100;
        } else {
            simple += num;
        }

    }
    const totalEarning = earn + simple;
    const save = totalEarning - livingCost;
    if (save >= 0) {
        return save;
    } else {
        return "earn more";
    }

}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [ 900 , 2700 , 3400]));