function toyShop(input) {
    let tripPrice = Number(input[0]);
    let jigsaws = Number(input[1]);
    let smartDolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let lorries = Number(input[5]);
    let jigsawPrice = jigsaws * 2.60;
    let smartDollPrice = smartDolls * 3;
    let teddyBearPrice = teddyBears * 4.10;
    let minionPrice = minions * 8.20;
    let lorryPrice = lorries * 2;
    let totalNumberToys = jigsaws + smartDolls + teddyBears + minions + lorries;
    let totalPriceToys = jigsawPrice + smartDollPrice + teddyBearPrice + minionPrice + lorryPrice;
    if (totalNumberToys >= 50) {
        totalPriceToys = totalPriceToys - (totalPriceToys * 0.25);
    }
    else{}
    let earnings = totalPriceToys - (totalPriceToys * 0.10);
    if (earnings >= tripPrice) {
        let moneyLeft = (earnings - tripPrice).toFixed(2);
        console.log(`Yes! ${moneyLeft} lv left.`);
    }
    else{
    let moneyNeeded = (tripPrice - earnings).toFixed(2);
    console.log(`Not enough money! ${moneyNeeded} lv needed.`);
    }
}

toyShop(["320","8","2","5","5","1"]);