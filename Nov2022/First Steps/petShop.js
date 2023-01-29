function receiptMoney(input) {
    let packDogFood = parseInt(input[0]);
    let packCatFood = parseInt(input[1]);
    let finalPrice = (packDogFood * 2.50) + (packCatFood * 4);
    console.log(`${finalPrice} lv.`);
}

receiptMoney(["13","9"]);