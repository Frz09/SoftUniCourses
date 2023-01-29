function puppyCare(input) {
    let foodKg = Number(input[0]);
    let foodInGrams = foodKg * 1000;
    let index = 1;
    let status = input[index];
    let gramsEaten = 0;
    let foodDiff = 0;

    while (status !== "Adopted") {
        status = input[index++];
        if(status === "Adopted"){
            break;
        }
        gramsEaten = gramsEaten + Number(status);
    }
    if (gramsEaten <= foodInGrams) {
        foodDiff = foodInGrams - gramsEaten;
        console.log(`Food is enough! Leftovers: ${foodDiff} grams.`);
    }
    else {
        foodDiff = gramsEaten - foodInGrams;
        console.log(`Food is not enough. You need ${foodDiff} grams more.`);
    }
}

puppyCare(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"]);