function catFood(input) {
    let numberCats = Number(input[0]);
    let smallCats = 0;
    let mediumCats = 0;
    let bigCats = 0;
    let sumFood = 0;

    for (let index = 1; index <= numberCats; index++) {
        if (input[index] >= 100 && input[index] < 200) {
            smallCats++;
            sumFood = Number(sumFood) + Number(input[index]);
        }
        else if (input[index] >= 200 && input[index] < 300) {
            mediumCats++;
            sumFood = Number(sumFood) + Number(input[index]);
        }
        else if (input[index] >= 300 && input[index] < 400) {
            bigCats++;
            sumFood = Number(sumFood) + Number(input[index]);
        }
        else {}
    }
    let priceFood = (sumFood / 1000) * 12.45;
    console.log(`Group 1: ${smallCats} cats.`);
    console.log(`Group 2: ${mediumCats} cats.`);
    console.log(`Group 3: ${bigCats} cats.`);
    console.log(`Price for food per day: ${priceFood.toFixed(2)} lv.`);
}

catFood(["6",
"102",
"236",
"123",
"399",
"342", 
"222"]);