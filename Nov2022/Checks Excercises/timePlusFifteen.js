function timePlus15(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let hoursToMins = hours * 60;
    let totalTime = hoursToMins + minutes;
    let timeIn15 = totalTime + 15;
    let resultHours = Math.trunc(timeIn15 / 60);
    let resultMinutes = timeIn15 % 60;
    if (resultHours == 24) {
        resultHours = 0;
    }
    else {}
    if (resultMinutes <= 9) {
        console.log(`${resultHours}:0${resultMinutes}`);
    }
    else {
        console.log(`${resultHours}:${resultMinutes}`);
    }
}

timePlus15(["12","49"]);