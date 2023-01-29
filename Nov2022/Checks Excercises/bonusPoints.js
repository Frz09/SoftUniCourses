function bonusPoints(input) {
    let points = Number(input[0]);
    let bonus = 0.0;
    if (points <= 100) {
        bonus = 5.0;
    }
    else if (points <= 1000) {
        bonus = points * 20 / 100;
    }
    else if (points > 1000) {
        bonus = points * 10 / 100;
    }
    else {
        console.log("Invalid number");
    }
    if (points % 2 == 0) {
        bonus += 1;
    }
    else if (points % 10 == 5) {
        bonus += 2;
    }
    else {
        console.log("Invalid number");
    }
    console.log(bonus);
    console.log(points + bonus);
}

bonusPoints(["175"]);