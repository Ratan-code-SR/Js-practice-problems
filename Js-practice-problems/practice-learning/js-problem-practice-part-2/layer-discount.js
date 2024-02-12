/**
 * first 100 -->100;
 * 101 to 200 -->90;
 * above 200 --> 70; 
 */

function layerDiscountedTotal(quantity) {
    const first100Price = 100;
    const second200Price = 90;
    const above200Price = 70;
    if (quantity <= first100Price) {
        const total = quantity * first100Price;
        return total;
    }
    else if (quantity <= 200) {
        const total = quantity * first100Price;
        const secondDiscount = quantity * second200Price;
        const totalPrice = total + secondDiscount;
        return totalPrice;
    }
    else {
        const total = quantity * first100Price;
        const secondDiscount = quantity * second200Price;
        const aboveProducts = quantity * above200Price;
        const totalPrice = total + secondDiscount + aboveProducts;
        return totalPrice;
    }

}


console.log(layerDiscountedTotal(500));