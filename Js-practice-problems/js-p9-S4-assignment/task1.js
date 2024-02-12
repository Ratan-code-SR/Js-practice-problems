
function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Invalid Number";
    }
    const ticketPrice = 120;
    const janitorCost = 500;
    const staffCost = 50 * 8;
    const revenue = (ticketSale * ticketPrice) - (janitorCost + staffCost);
    return revenue;

}
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-93));