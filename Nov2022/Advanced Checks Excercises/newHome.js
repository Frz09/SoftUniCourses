function newHome(input) {
    let flowersType = input[0];
    let flowersNumber = Number(input[1]);
    let budget = Number(input[2]);
    let flowersPrice = 0;
    let rosePrice = flowersNumber * 5;
    let dahliaPrice = flowersNumber * 3.80;
    let tulipPrice = flowersNumber * 2.80;
    let narcissusPrice = flowersNumber * 3;
    let gladiolusPrice = flowersNumber * 2.50;
    switch(flowersType) {
    case "Roses":
        if(flowersNumber >= 80) {
            flowersPrice = rosePrice - (rosePrice * 0.1);
            let isItEnough = budget - flowersPrice;
            let itIsNotEnough = flowersPrice - budget;
            if (flowersPrice <= budget){
                console.log(`Hey, you have a great garden with ${flowersNumber} ${flowersType} and ${isItEnough.toFixed(2)} leva left.`);
            }else if(flowersPrice > budget) {
                console.log(`Not enough money, you need ${itIsNotEnough.toFixed(2)} leva more.`);
            }
        }
        else {
            flowersPrice = rosePrice;
            let noDiscountEnough = budget - rosePrice;
            let notEnoughNorDiscount = rosePrice - budget;
            if (flowersPrice <= budget){
                console.log(`Hey, you have a great garden with ${flowersNumber} ${flowersType} and ${noDiscountEnough.toFixed(2)} leva left.`);
            }else if(flowersPrice > budget) {
                console.log(`Not enough money, you need ${notEnoughNorDiscount.toFixed(2)} leva more.`);
            }
        }
    break;
    case "Dahlias":
        if(flowersNumber >=90) {
            flowersPrice = dahliaPrice - (dahliaPrice * 0.15);
            let isItEnough = budget - flowersPrice;
            let itIsNotEnough = flowersPrice - budget;
            if (flowersPrice <= budget){
                console.log(`Hey, you have a great garden with ${flowersNumber} ${flowersType} and ${isItEnough.toFixed(2)} leva left.`);
            }else if(flowersPrice > budget) {
                console.log(`Not enough money, you need ${itIsNotEnough.toFixed(2)} leva more.`);
            }
        }
        else {
            flowersPrice = dahliaPrice;
            let noDiscountEnough = budget - dahliaPrice;
            let notEnoughNorDiscount = dahliaPrice - budget;
            if (flowersPrice <= budget){
                console.log(`Hey, you have a great garden with ${flowersNumber} ${flowersType} and ${noDiscountEnough.toFixed(2)} leva left.`);
            }else if(flowersPrice > budget) {
                console.log(`Not enough money, you need ${notEnoughNorDiscount.toFixed(2)} leva more.`);
            }
        }
    break;
    case "Tulips":
        if(flowersNumber >= 80){
            flowersPrice = tulipPrice - (tulipPrice * 0.15);
            let isItEnough = budget - flowersPrice;
            let itIsNotEnough = flowersPrice - budget;
            if (flowersPrice <= budget){
                console.log(`Hey, you have a great garden with ${flowersNumber} ${flowersType} and ${isItEnough.toFixed(2)} leva left.`);
            }else if(flowersPrice > budget) {
                console.log(`Not enough money, you need ${itIsNotEnough.toFixed(2)} leva more.`);
            }
        }
        else {
            flowersPrice = tulipPrice;
            let noDiscountEnough = budget - tulipPrice;
            let notEnoughNorDiscount = tulipPrice - budget;
            if (flowersPrice <= budget){
                console.log(`Hey, you have a great garden with ${flowersNumber} ${flowersType} and ${noDiscountEnough.toFixed(2)} leva left.`);
            }else if(flowersPrice > budget) {
                console.log(`Not enough money, you need ${notEnoughNorDiscount.toFixed(2)} leva more.`);
            }
        }
    break;
    case "Narcissus":
        if(flowersNumber <= 120){
            flowersPrice = narcissusPrice + (narcissusPrice * 0.15);
            let isItEnough = budget - flowersPrice;
            let itIsNotEnough = flowersPrice - budget;
            if (flowersPrice <= budget){
                console.log(`Hey, you have a great garden with ${flowersNumber} ${flowersType} and ${isItEnough.toFixed(2)} leva left.`);
            }else if(flowersPrice > budget) {
                console.log(`Not enough money, you need ${itIsNotEnough.toFixed(2)} leva more.`);
            }
        }
        else {
            flowersPrice = narcissusPrice;
            let noDiscountEnough = budget - narcissusPrice;
            let notEnoughNorDiscount = narcissusPrice - budget;
            if (flowersPrice <= budget){
                console.log(`Hey, you have a great garden with ${flowersNumber} ${flowersType} and ${noDiscountEnough.toFixed(2)} leva left.`);
            }else if(flowersPrice > budget) {
                console.log(`Not enough money, you need ${notEnoughNorDiscount.toFixed(2)} leva more.`);
            }
        }
    break;
    case "Gladiolus":
        if(flowersNumber <= 80){
            flowersPrice = gladiolusPrice + (gladiolusPrice * 0.2);
            let isItEnough = budget - flowersPrice;
            let itIsNotEnough = flowersPrice - budget;
            if (flowersPrice <= budget){
                console.log(`Hey, you have a great garden with ${flowersNumber} ${flowersType} and ${isItEnough.toFixed(2)} leva left.`);
            }else if(flowersPrice > budget) {
                console.log(`Not enough money, you need ${itIsNotEnough.toFixed(2)} leva more.`);
            }
        }
        else {
            flowersPrice = gladiolusPrice;
            let noDiscountEnough = budget - gladiolusPrice;
            let notEnoughNorDiscount = gladiolusPrice - budget;
            if (flowersPrice <= budget){
                console.log(`Hey, you have a great garden with ${flowersNumber} ${flowersType} and ${noDiscountEnough.toFixed(2)} leva left.`);
            }else if(flowersPrice > budget) {
                console.log(`Not enough money, you need ${notEnoughNorDiscount.toFixed(2)} leva more.`);
            }
        }
    break;
    default:
        console.log("error");
    break;
    }
}

newHome(["Dahlias","119","360"]);