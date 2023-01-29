function cinema(input) {
    let income = 0;
    let ticketType = input[0];
    let seatsRows = Number(input[1]);
    let seatsColumn = Number(input[2]);
    switch (ticketType) {
    case "Premiere":
        income = seatsRows * seatsColumn * 12.0;
        console.log(`${income.toFixed(2)} leva`);
        break;
    case "Normal":
        income = seatsRows * seatsColumn * 7.50;
        console.log(`${income.toFixed(2)} leva`);
        break;
    case "Discount":
        income = seatsRows * seatsColumn * 5.00;
        console.log(`${income.toFixed(2)} leva`);
        break;
    }
}

cinema(["Premiere","10","12"]);