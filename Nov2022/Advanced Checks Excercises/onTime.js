function onTime(input) {
    let examHour = Number(input[0]);
    let examMunute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);
    let examHourInMinutes = examHour * 60 + examMunute;
    let arrivalHourInMinutes = arrivalHour * 60 + arrivalMinute;
    let difference = 0;
    let hourInHours = 0;
    let minutes = 0;
    let status = "";
    let beforeOrAfter = "";


    if(examHourInMinutes - arrivalHourInMinutes > 30) {
        status = "Early";
    } else if(examHourInMinutes - arrivalHourInMinutes >= 0 && examHourInMinutes - arrivalHourInMinutes <= 30) {
        status = "On time";
    } else {
        status = "Late";
    }
    if(examHourInMinutes > arrivalHourInMinutes){
        difference = examHourInMinutes - arrivalHourInMinutes;
        beforeOrAfter = "before";
        if(difference > 59){
            hourInHours = difference / 60;
            if(hourInHours > 1) {
                minutes = hourInHours % 1 * 60;
                minutes = Math.round(minutes * 100) /100;
                hourInHours = Math.trunc(hourInHours);
            }else if(hourInHours = 1){
                minutes = hourInHours % 1 * 60;
                minutes = Math.round(minutes * 100) /100;
                minutes = minutes + "0";
                hourInHours = Math.trunc(hourInHours);
            }else{}
        }else{
            minutes = difference;
        }
    }
    else if(examHourInMinutes < arrivalHourInMinutes){
        difference = arrivalHourInMinutes - examHourInMinutes;
        beforeOrAfter = "after";
        if(difference > 59){
            hourInHours = difference / 60;
            if(hourInHours > 1) {
                minutes = hourInHours % 1 * 60;
                minutes = Math.round(minutes * 100) /100;
                hourInHours = Math.trunc(hourInHours);
            }else{}
        }else{
            minutes = difference;
        }
    }
    else{}

    console.log(`${status}`);
    if(hourInHours != 0) {
        console.log(`${hourInHours}:${minutes} hours ${beforeOrAfter} the start`);
    }
    else if(minutes > 0){
        console.log(`${minutes} minutes ${beforeOrAfter} the start`);
    }
    else {}
}

onTime(["11","30","8","12"]);