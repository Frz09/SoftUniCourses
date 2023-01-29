function solve(num1,num2,num3){
    let setDate = `${num1}-${num2}-${num3}`;
    let tomorrow = new Date(setDate);
    tomorrow.setDate(new Date(setDate).getDate() + 1);
    let tomorrowString = tomorrow.toDateString().slice(4,16);
    let month = tomorrowString.split("", 3);
    let day = tomorrowString.slice(4,6);
    let year = tomorrowString.slice(7,11);
    month = month.join("");
    switch(month){
        case "Jan":
            month = 01;
        break;
        case "Feb":
            month = 02;
        break;
        case "Mar":
            month = 03;
        break;
        case "Apr":
            month = 04;
        break;
        case "May":
            month = 05;
        break;
        case "Jun":
            month = 06;
        break;
        case "Jul":
            month = 07;
        break;
        case "Aug":
            month = 08;
        break;
        case "Sep":
            month = 09;
        break;
        case "Oct":
            month = 10;
        break;
        case "Nov":
            month = 11;
        break;
        case "Dec":
            month = 12;
        break;
        default:
        break;
    }
    if(num1<100){
        year = year - 100;
    }
    if(day<=9){
        day = day.slice(1);
        console.log(`${year}-${month}-${day}`);
    }else{
        console.log(`${year}-${month}-${day}`);
    }
}

solve(1,1,1);