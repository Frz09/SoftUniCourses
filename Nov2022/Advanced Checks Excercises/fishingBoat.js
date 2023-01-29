function fishingBoat(input) {
    let groupBudget = Number(input[0]) ;
    let season = input[1];
    let numberFishermen = Number(input[2]);
    let shipCost = 0;
    switch(season) {
    case "Spring":
        shipCost = 3000;
        if(numberFishermen <= 6 && numberFishermen != 0) {
            let shipCostDiscount1 = shipCost - shipCost * 0.1;
            if(numberFishermen % 2 === 0) {
                let shipCostDiscount2 = shipCost - shipCost * 0.15;
                if(groupBudget >= shipCostDiscount2){
                    let moneyLeft = groupBudget - shipCostDiscount2;
                    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
                }
                else{
                    let moneyNeeded = shipCostDiscount2 - groupBudget;
                    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
                }
            }
            else{
                if(groupBudget >= shipCostDiscount1) {
                    let moneyLeft = groupBudget - shipCostDiscount1;
                    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
                }
                else{
                    let moneyNeeded = shipCostDiscount1 - groupBudget;
                    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
                }
            }
        }
        else if(numberFishermen >= 7 && numberFishermen <= 11) {
            let shipCostDiscount1 = shipCost - shipCost * 0.15;
            if(numberFishermen % 2 === 0) {
                let shipCostDiscount2 = shipCost - shipCost * 0.2;
                if(groupBudget >= shipCostDiscount2){
                    let moneyLeft = groupBudget - shipCostDiscount2;
                    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
                }
                else{
                    let moneyNeeded = shipCostDiscount2 - groupBudget;
                    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
                }
            }
            else{
                if(groupBudget >= shipCostDiscount1) {
                    let moneyLeft = groupBudget - shipCostDiscount1;
                    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
                }
                else{
                    let moneyNeeded = shipCostDiscount1 - groupBudget;
                    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
                }
            }
        }
        else if(numberFishermen > 12) {
            let shipCostDiscount1 = shipCost - shipCost * 0.25;
            if(numberFishermen % 2 === 0) {
                let shipCostDiscount2 = shipCost - shipCost * 0.3;
                if(groupBudget >= shipCostDiscount2){
                    let moneyLeft = groupBudget - shipCostDiscount2;
                    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
                }
                else{
                    let moneyNeeded = shipCostDiscount2 - groupBudget;
                    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
                }
            }
            else{
                if(groupBudget >= shipCostDiscount1) {
                    let moneyLeft = groupBudget - shipCostDiscount1;
                    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
                }
                else{
                    let moneyNeeded = shipCostDiscount1 - groupBudget;
                    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
                }
            }
        }else{}
    break;
    case "Summer":
        shipCost = 4200;
        if(numberFishermen <= 6 && numberFishermen != 0) {
            let shipCostDiscount1 = shipCost - shipCost * 0.1;
            if(numberFishermen % 2 === 0) {
                let shipCostDiscount2 = shipCost - shipCost * 0.15;
                if(groupBudget >= shipCostDiscount2){
                    let moneyLeft = groupBudget - shipCostDiscount2;
                    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
                }
                else{
                    let moneyNeeded = shipCostDiscount2 - groupBudget;
                    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
                }
            }
            else{
                if(groupBudget >= shipCostDiscount1) {
                    let moneyLeft = groupBudget - shipCostDiscount1;
                    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
                }
                else{
                    let moneyNeeded = shipCostDiscount1 - groupBudget;
                    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
                }
            }
        }
        else if(numberFishermen >= 7 && numberFishermen <= 11) {
            let shipCostDiscount1 = shipCost - shipCost * 0.15;
            if(numberFishermen % 2 === 0) {
                let shipCostDiscount2 = shipCost - shipCost * 0.2;
                if(groupBudget >= shipCostDiscount2){
                    let moneyLeft = groupBudget - shipCostDiscount2;
                    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
                }
                else{
                    let moneyNeeded = shipCostDiscount2 - groupBudget;
                    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
                }
            }
            else{
                if(groupBudget >= shipCostDiscount1) {
                    let moneyLeft = groupBudget - shipCostDiscount1;
                    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
                }
                else{
                    let moneyNeeded = shipCostDiscount1 - groupBudget;
                    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
                }
            }
        }
        else if(numberFishermen > 12) {
            let shipCostDiscount1 = shipCost - shipCost * 0.25;
            if(numberFishermen % 2 === 0) {
                let shipCostDiscount2 = shipCost - shipCost * 0.3;
                if(groupBudget >= shipCostDiscount2){
                    let moneyLeft = groupBudget - shipCostDiscount2;
                    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
                }
                else{
                    let moneyNeeded = shipCostDiscount2 - groupBudget;
                    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
                }
            }
            else{
                if(groupBudget >= shipCostDiscount1) {
                    let moneyLeft = groupBudget - shipCostDiscount1;
                    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
                }
                else{
                    let moneyNeeded = shipCostDiscount1 - groupBudget;
                    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
                }
            }
        }else{}
    break;
    case "Autumn":
        shipCost = 4200;
        if(numberFishermen <= 6 && numberFishermen != 0) {
            let shipCostDiscount1 = shipCost - shipCost * 0.1;
            if(groupBudget >= shipCostDiscount1) {
                let moneyLeft = groupBudget - shipCostDiscount1;
                console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
            }
            else{
                let moneyNeeded = shipCostDiscount1 - groupBudget;
                console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
            }
        }
        else if(numberFishermen >= 7 && numberFishermen <= 11) {
            let shipCostDiscount1 = shipCost - shipCost * 0.15;
            if(groupBudget >= shipCostDiscount1) {
                let moneyLeft = groupBudget - shipCostDiscount1;
                console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
            }
            else{
                let moneyNeeded = shipCostDiscount1 - groupBudget;
                console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
            }
        }
        else if(numberFishermen > 12) {
            let shipCostDiscount1 = shipCost - shipCost * 0.25;
            if(groupBudget >= shipCostDiscount1) {
                let moneyLeft = groupBudget - shipCostDiscount1;
                console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
            }
            else{
                let moneyNeeded = shipCostDiscount1 - groupBudget;
                console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
            }
        }else{}
    break;
    case "Winter":
        shipCost = 2600;
        if(numberFishermen <= 6 && numberFishermen != 0) {
            let shipCostDiscount1 = shipCost - shipCost * 0.1;
            if(numberFishermen % 2 === 0) {
                let shipCostDiscount2 = shipCost - shipCost * 0.15;
                if(groupBudget >= shipCostDiscount2){
                    let moneyLeft = groupBudget - shipCostDiscount2;
                    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
                }
                else{
                    let moneyNeeded = shipCostDiscount2 - groupBudget;
                    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
                }
            }
            else{
                if(groupBudget >= shipCostDiscount1) {
                    let moneyLeft = groupBudget - shipCostDiscount1;
                    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
                }
                else{
                    let moneyNeeded = shipCostDiscount1 - groupBudget;
                    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
                }
            }
        }
        else if(numberFishermen >= 7 && numberFishermen <= 11) {
            let shipCostDiscount1 = shipCost - shipCost * 0.15;
            if(numberFishermen % 2 === 0) {
                let shipCostDiscount2 = shipCost - shipCost * 0.2;
                if(groupBudget >= shipCostDiscount2){
                    let moneyLeft = groupBudget - shipCostDiscount2;
                    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
                }
                else{
                    let moneyNeeded = shipCostDiscount2 - groupBudget;
                    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
                }
            }
            else{
                if(groupBudget >= shipCostDiscount1) {
                    let moneyLeft = groupBudget - shipCostDiscount1;
                    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
                }
                else{
                    let moneyNeeded = shipCostDiscount1 - groupBudget;
                    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
                }
            }
        }
        else if(numberFishermen > 12) {
            let shipCostDiscount1 = shipCost - shipCost * 0.25;
            if(numberFishermen % 2 === 0) {
                let shipCostDiscount2 = shipCost - shipCost * 0.3;
                if(groupBudget >= shipCostDiscount2){
                    let moneyLeft = groupBudget - shipCostDiscount2;
                    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
                }
                else{
                    let moneyNeeded = shipCostDiscount2 - groupBudget;
                    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
                }
            }
            else{
                if(groupBudget >= shipCostDiscount1) {
                    let moneyLeft = groupBudget - shipCostDiscount1;
                    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
                }
                else{
                    let moneyNeeded = shipCostDiscount1 - groupBudget;
                    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
                }
            }
        }else{}
    break;
    default:
        console.log("error");
    break;
    }
}

fishingBoat(["2000","Winter","13"]);