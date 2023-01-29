function goldMine(input) {
    let numberLocations = Number(input[0]);
    let numberDays = 0;
    let index = 0;
    index++;
    let expectation = 0;
    let kgGathered = 0;
    let kgTotal = 0;
    let averageOutput = 0;

    for (i = 1; i <= numberLocations; i++) {
        expectation = input[index];
        index++;
        numberDays = input[index];
        index++;
        for (let y = 1; y <= numberDays; y++) {
            expectation = input
            kgGathered = input[index];
            kgTotal = Number(kgGathered) + Number(kgTotal);
            index++
            if (y == numberDays) {
                averageOutput = kgTotal / numberDays;
                if (averageOutput.toFixed(2) >= expectation) {
                    console.log(`Good job! Average gold per day: ${averageOutput.toFixed(2)}.`);
                    kgGathered = 0;
                    kgTotal = 0;
                    averageOutput = 0;
                    numberLocations++;
                    break;
                }
                else if (expectation > averageOutput.toFixed(2)){
                    let diffOutput = expectation - averageOutput;
                    console.log(`You need ${diffOutput.toFixed(2)} gold.`);
                    kgGathered = 0;
                    kgTotal = 0;
                    averageOutput = 0;
                    numberLocations++
                    break;
                }
            }
        }
    }
}

goldMine(["3",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10",
"2",
"20",
"10"])
;