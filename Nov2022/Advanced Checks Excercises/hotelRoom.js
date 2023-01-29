function hotelRoom(input) {
    let month = input[0];
    let numberStays = Number(input[1]);
    let studioStay = 0;
    let flatStay = 0;
    let totalStudioValue = 0;
    let totalFlatValue = 0;

    switch(month) {
    case "October":
    case "May":
        studioStay = numberStays * 50;
        flatStay = numberStays * 65;
        break;
    case "September":
    case "June":
        studioStay = numberStays * 75.20;
        flatStay = numberStays * 68.70;
        break;
    case "July":
    case "August":
        studioStay = numberStays * 76;
        flatStay = numberStays * 77;
        break;
    default:
        break;
    }
    if(numberStays > 7 && numberStays < 14) {
        if (month === "May" || month === "October") {
            totalStudioValue = studioStay - (studioStay * 0.05);
            totalFlatValue = flatStay;
        }else{
            totalStudioValue = studioStay;
            totalFlatValue = flatStay;
        }
    }
    else if(numberStays > 14) {
        if (month === "May" || month === "October") {
            totalStudioValue = studioStay - (studioStay * 0.3);
            totalFlatValue = flatStay - (flatStay * 0.1);
        }
        else if(month === "June" || month === "September"){
            totalStudioValue = studioStay - (studioStay * 0.2);
            totalFlatValue = flatStay - flatStay * 0.1;
        }
        else if(month === "July" || month === "August"){
            totalStudioValue = studioStay;
            totalFlatValue = flatStay - (flatStay * 0.1);
        }
        else{}
    }
    else {
        totalStudioValue = studioStay;
        totalFlatValue = flatStay;
    }
    console.log(`Apartment: ${totalFlatValue.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudioValue.toFixed(2)} lv.`);
}

hotelRoom(["August","20"]);