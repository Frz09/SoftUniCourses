function depositCalcucator(input) {
    let deposit = input[0];
    let depositDate = input[1];
    let interestRate = input[2] /100;
    let interestMonth = deposit * interestRate / 12;
    let interestMonthFixed = interestMonth;
    let depositCalculated = (depositDate * interestMonthFixed).toFixed(2);
    let dividents = Number(deposit) + Number(depositCalculated);
    console.log(`${dividents} lv.`);
}

depositCalcucator(["200", "3", "5.7"]);