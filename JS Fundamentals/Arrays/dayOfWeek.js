function dayOfWeek(day) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let trueDay = "";

    if (day >= 1 && day <= 7) {
        switch (day) {
            case 1:
                trueDay = days[0];
                break;
            case 2:
                trueDay = days[1];
                break;
            case 3:
                trueDay = days[2];
                break;
            case 4:
                trueDay = days[3];
                break;
            case 5:
                trueDay = days[4];
                break;
            case 6:
                trueDay = days[5];
                break;
            case 7:
                trueDay = days[6];
                break;
            default:
                console.log(`Invalid day!`);
                break;

        }
    } else {
        console.log(`Invalid day!`);
    }
    console.log(trueDay);
}

dayOfWeek(3);