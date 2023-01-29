function trip(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let typeStay = "";
    let spentBudget = 0;

    if(budget <= 100 && season === "summer") {
        destination = "Bulgaria";
        typeStay = "Camp";
        spentBudget = budget * 0.3;
    }
    else if(budget <= 100 && season === "winter"){
        destination = "Bulgaria";
        typeStay = "Hotel";
        spentBudget = budget * 0.7;
    }
    else if(budget <= 1000 && season === "summer") {
        destination = "Balkans";
        typeStay = "Camp";
        spentBudget = budget * 0.4;
    }
    else if(budget <= 1000 && season === "winter") {
        destination = "Balkans";
        typeStay = "Hotel";
        spentBudget = budget * 0.8;
    }
    else if(budget > 1000) {
        destination = "Europe";
        typeStay = "Hotel";
        spentBudget = budget * 0.9;
    }
    else{}
    console.log(`Somewhere in ${destination}`);
    console.log(`${typeStay} - ${spentBudget.toFixed(2)}`);
}

trip(["50", "summer"]);