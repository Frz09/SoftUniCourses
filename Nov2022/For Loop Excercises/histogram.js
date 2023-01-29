function histogram(input) {
    let amountNumbers = Number(input[0]);
    let mainPercentage = 100;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= 20; i++) {
        if (input[i] < 200 && input[i] > 0) {
            p1++;
        }
        else if (input[i] >= 200 && input[i] < 400) {
            p2++;
        }
        else if (input[i] >= 400 && input[i] < 600) {
            p3++;
        }
        else if (input[i] >= 600 && input[i] < 800) {
            p4++;
        }
        else if (input[i] >= 800) {
            p5++;
        }
        else { }
    }

    p1 = (mainPercentage / amountNumbers) * p1;
    p2 = (mainPercentage / amountNumbers) * p2;
    p3 = (mainPercentage / amountNumbers) * p3;
    p4 = (mainPercentage / amountNumbers) * p4;
    p5 = (mainPercentage / amountNumbers) * p5;
    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}

histogram(["1", "450"]);