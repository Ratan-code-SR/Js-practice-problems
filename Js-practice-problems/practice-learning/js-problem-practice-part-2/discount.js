/**
 * upto 100 --> 100
 * more than 100 - 200  --> 90
 * more than 200: -->70
 */


function discount (price) {
 if(price <= 100){
    return price * 100;
 }
 else if(price<=200){
    return price * 90;
 }
 else{
    return price * 70;
 }
}

console.log(discount(100));