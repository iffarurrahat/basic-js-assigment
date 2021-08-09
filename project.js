//Question-1 seerToMon
function seerToMon(seer) {
    var mon = seer / 40;
    return mon;
}

const value = seerToMon(40);
/* 
console.log(value);
*/


//Question-2 totalSales

function totalSales(shart, pent, shoe) {
    const perShart = 100;
    const perPent = 200;
    const perShoe = 500;

    //Quantity Calculation
    shartQuantity = shart * perShart;
    pentQuantity = pent * perPent;
    shoeQuantity = shoe * perShoe;

    //adding all Quantity
    const totalQuantity = shartQuantity + pentQuantity + shoeQuantity;
    return totalQuantity;

}

const totalEarn = totalSales(1, 1, 1);
/* 
console.log(totalEarn);
 */

//Question-3 deliveryCost

function deliveryCost(quantity) {
    const deliveryInside100 = 100;
    const deliveryInside200 = 80;
    const deliveryInside300 = 50;
    if (quantity <= 100) {
        const delivery = quantity * deliveryInside100;
        return delivery;
    }
    else if (quantity <= 200) {
        const first100Delivery = 100 * deliveryInside100;
        const restDeliverys = quantity - 100;
        const second200Delivery = restDeliverys * deliveryInside200;
        const totalDelivery = first100Delivery + second200Delivery;
        return totalDelivery;
    }
    else {
        const first100Delivery = 100 * deliveryInside100;
        const second200Delivery = 100 * deliveryInside200;
        const restDeliverys = quantity - 200;
        const restLongDelivery = restDeliverys * deliveryInside300;
        const totalDelivery = first100Delivery + second200Delivery + restLongDelivery;
        return totalDelivery;
    }

}
const totalprice = deliveryCost(110);
console.log(totalprice);