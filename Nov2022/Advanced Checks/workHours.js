function workHours(input) {
    let hour = Number(input[0]);
    let day = input[1];
    if (hour >= 10 && hour <=18) {
        switch(day) {
        case "Monday":
            console.log("open");
            break;
        case "Tuesday":
            console.log("open");
            break;
        case "Wednesday":
            console.log("open");
            break;
        case "Thursday":
            console.log("open");
            break;
        case "Friday":
            console.log("open");
            break;
        case "Saturday":
            console.log("open");
            break;
        case "Sunday":
            console.log("closed");
            break;
        default:
            console.log("Invalid day");
            break;
        }
    }
    else {
        console.log("closed");
    }
}

workHours(["11","Sunday"]);