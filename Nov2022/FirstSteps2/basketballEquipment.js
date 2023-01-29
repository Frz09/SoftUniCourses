function basketballExpenses(input) {
    let basketballPracticePrice = Number(input[0]);
    let basketballShoes = basketballPracticePrice - basketballPracticePrice * 0.4;
    let basketballClothes = basketballShoes - basketballShoes * 0.2;
    let basketBall = basketballClothes / 4;
    let basketballAccessories = basketBall / 5;
    let totalExpenses = basketballPracticePrice + basketballShoes + basketballClothes + basketBall + basketballAccessories;
    console.log(totalExpenses)
}

basketballExpenses(["550"]);