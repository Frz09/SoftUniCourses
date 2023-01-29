function literature(input) {
    let numberPages = input[0];
    let pagesReadPerHour = input[1];
    let daysRemaining = input[2];
    let totalTimePerBook = (numberPages) / (pagesReadPerHour);
    let hoursEveryDay = (totalTimePerBook) / (daysRemaining);
    console.log(hoursEveryDay);
}

literature(["432", "15", "4"]);