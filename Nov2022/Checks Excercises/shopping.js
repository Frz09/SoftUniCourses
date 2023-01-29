function shopping(input) {
    let budgetPetar = Number(input[0]);
    let gpus = Number(input[1]);
    let cpus = Number(input[2]);
    let ram = Number(input[3]);
    let gpuPrice = 250;
    let gpuPriceTotal = gpus * gpuPrice;
    let cpuPrice = gpuPriceTotal * 0.35;
    let ramPrice = gpuPriceTotal * 0.10;
    let cpuPriceTotal = cpuPrice * cpus;
    let ramPriceTotal = ramPrice * ram;
    let totalOrderPrice = gpuPriceTotal + cpuPriceTotal + ramPriceTotal;
    if (gpus > cpus) {
        totalOrderPrice = totalOrderPrice - (totalOrderPrice * 0.15);
    } else {}
    if (totalOrderPrice <= budgetPetar) {
        let budgetRemaining = budgetPetar - totalOrderPrice;
        budgetRemaining = budgetRemaining.toFixed(2);
        console.log(`You have ${budgetRemaining} leva left!`);
    } else {
        let moneyRequired = totalOrderPrice - budgetPetar;
        moneyRequired = moneyRequired.toFixed(2);
        console.log(`Not enough money! You need ${moneyRequired} leva more!`);
    }
}

shopping(["920.45","3","1","1"]);