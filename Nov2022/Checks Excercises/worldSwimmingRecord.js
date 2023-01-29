function worldRecord(input) {
    let recordInSeconds = Number(input[0]);
    let lenghtInMeters = Number(input[1]);
    let timeSPM = Number(input[2]);
    let timeNeeded = lenghtInMeters * timeSPM;
    let waterResistance = lenghtInMeters / 15;
    let waterResist = Math.trunc(waterResistance);
    let timeWasted = waterResist * 12.5;
    let realTimeNeeded = timeNeeded + timeWasted;
    if (recordInSeconds < realTimeNeeded) {
        let timeDifference = realTimeNeeded - recordInSeconds;
        timeDifference = timeDifference.toFixed(2);
        console.log(`No, he failed! He was ${timeDifference} seconds slower.`);
    }
    else {
        realTimeNeeded = realTimeNeeded.toFixed(2);
        console.log(`Yes, he succeeded! The new world record is ${realTimeNeeded} seconds.`);
    }
}

worldRecord(["55555.67","3017","5.03"]);