function lunchBreak(input) {
    let nameOfShow = input[0];
    let showDuration = Number(input[1]);
    let breakTime = Number(input[2]);
    let lunchTime = breakTime * 1/8;
    let restTime = breakTime * 1/4;
    let timeLeft = breakTime - lunchTime - restTime;
    if (timeLeft >= showDuration) {
        let timeAfterShow = timeLeft - showDuration;
        timeAfterShow = Math.ceil(timeAfterShow);
        console.log(`You have enough time to watch ${nameOfShow} and left with ${timeAfterShow} minutes free time.`);
    } else {
        let timeNeeded = showDuration - timeLeft;
        timeNeeded = Math.ceil(timeNeeded);
        console.log(`You don't have enough time to watch ${nameOfShow}, you need ${timeNeeded} more minutes.`);
    }
}

lunchBreak(["Teen Wolf","48","60"]);