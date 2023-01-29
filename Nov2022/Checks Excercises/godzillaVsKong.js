function fundsFilm(input) {
    let filmBudget = Number(input[0]);
    let extrasNumber = Number(input[1]);
    let extrasCostumes = Number(input[2]);
    let extrasCostumePrice = extrasNumber * extrasCostumes;
    let extrasCostumeFixed = parseFloat(extrasCostumePrice.toFixed(2));
    let filmDecor = filmBudget * 0.10;
    let filmD = parseFloat(filmDecor.toFixed(2));
        if (extrasNumber >= 150) {
        extrasCostumeFixed = extrasCostumeFixed - (extrasCostumeFixed * 0.10);
    } else {}
    let decorCostumesPrice = extrasCostumeFixed + filmD;
    let decorCP = parseFloat(decorCostumesPrice.toFixed(2));
    if (decorCP >= filmBudget) {
        let moneyNeeded = decorCP - filmBudget;
        moneyNeeded = moneyNeeded.toFixed(2);
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded} leva more.`)
    }
    else {
        let moneyLeft = filmBudget - decorCP;
        moneyLeft = moneyLeft.toFixed(2);
        console.log("Action!")
        console.log(`Wingard starts filming with ${moneyLeft} leva left.`)
    }
}

fundsFilm(["99999.88","222.22","55.68"]);