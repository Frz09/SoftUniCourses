function foodDelivery(input) {
    let chickenMenus = input[0];
    let fishMenus = input[1];
    let vegetarianMenus = input[2];
    let chickenMenuPrice = 10.35;
    let fishMenuPrice = 12.40;
    let vegetarianMenuPrice = 8.15;
    let deliveryPrice = 2.50;
    let chickenTotal = chickenMenus * chickenMenuPrice;
    let fishTotal = fishMenus * fishMenuPrice;
    let vegetarianTotal = vegetarianMenus * vegetarianMenuPrice;
    let orderPrice = chickenTotal + fishTotal + vegetarianTotal;
    let desertPrice = orderPrice * 0.2;
    let totalOrderPrice = orderPrice + desertPrice + deliveryPrice;
    console.log(totalOrderPrice)
}

foodDelivery(["9","2","6"]);