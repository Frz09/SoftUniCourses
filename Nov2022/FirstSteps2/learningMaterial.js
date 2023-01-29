function moneyTotal(input) {
    let packOfPens = input[0];
    let packOfSharpies = input[1];
    let detergentLiters = input[2];
    let discountPercent = input[3] / 100;
    let pricePens = 5.80;
    let priceSharpies = 7.20;
    let detergentPerLiter = 1.20;
    let totalForPens = (packOfPens) * (pricePens);
    let totalForSharpies = (packOfSharpies) * (priceSharpies);
    let totalForDetergent = (detergentLiters) * (detergentPerLiter);
    let totalForAll = (totalForPens) + (totalForSharpies) + (totalForDetergent);
    let finalPrice = (totalForAll) - ((totalForAll) * (discountPercent));
    console.log(`${finalPrice} lv.`);
}

moneyTotal(["4", "2", "5", "13"]);