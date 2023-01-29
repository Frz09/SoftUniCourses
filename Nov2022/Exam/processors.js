function processors(input) {
    let processorsRequired = Number(input[0]);
    let employeesNumber = Number(input[1]);
    let workDays = Number(input[2]);
    let workHours = 8;
    let processorPrice = 110.10;
    let processorDiff = 0;
    let totalWorkHours = employeesNumber * workDays * workHours;
    let processorsProduced = Math.floor(totalWorkHours / 3);
    if (processorsProduced < processorsRequired) {
        processorDiff = processorsRequired - processorsProduced;
        processorDiff = processorDiff * processorPrice;
        console.log(`Losses: -> ${processorDiff.toFixed(2)} BGN`);
    } else {
        processorDiff = processorsProduced - processorsRequired;
        processorDiff = processorDiff * processorPrice;
        console.log(`Profit: -> ${processorDiff.toFixed(2)} BGN`);
    }
}

processors(["500","9","20.8"]);


/*
1 processor takes 3 hours to produce
1 employee works 8 hours a day

*/