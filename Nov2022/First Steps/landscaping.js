function landscapingPrice (input) {
    let sqMeters = input[0];
    let yardPrice = sqMeters * 7.61;
    let discountAmount = 0.18 * yardPrice;
    let finalAmount = yardPrice - discountAmount;
    console.log(`The final price is: ${finalAmount} lv.`);
    console.log(`The discount is: ${discountAmount} lv.`);
}

landscapingPrice (["150"]);