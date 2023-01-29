function cleverLily(input) {
    let lilyAge = Number(input[0]);
    let priceWashingM = Number(input[1]);
    let toyPrice = Number(input[2]);
    let sum = 0;
    let total = 0;
    let toyCount = 0;

    for (let i = 1; i <= lilyAge; i++) {
        if (i % 2 === 0) {
            sum = sum + 10;
            total = sum + total;
        }
        else if (i % 1 === 0) {
            toyCount++
        }
    }
    let brotherTookAway = sum / 10;
    let toysSold = toyCount * toyPrice;
    let totalMoneySaved = toysSold - brotherTookAway + total;
    if (totalMoneySaved >= priceWashingM) {
        let difference = totalMoneySaved - priceWashingM;
        console.log(`Yes! ${difference.toFixed(2)}`);
    }
    else {
        let difference = priceWashingM - totalMoneySaved;
        console.log(`No! ${difference.toFixed(2)}`);
    }
}

cleverLily(["10", "170.00", "6"]);