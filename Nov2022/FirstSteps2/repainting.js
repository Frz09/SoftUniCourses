function repainting(input) {
    let plasticCoverSQM = Number(input[0]);
    let paintLiters = Number(input[1]);
    let diluterLiters = Number(input[2]);
    let hoursNeeded = Number(input[3]);
    let coverPriceSQM = 1.50;
    let paintPriceLiter = 14.50;
    let diluterPriceLiter = 5.00;
    let extraSQMCover = 2;
    let extraPaint = (paintLiters * 10) / 100;
    let priceBags = 0.40;
    let sumCovers = (plasticCoverSQM) + (extraSQMCover);
    let totalPriceCovers = (sumCovers) * (coverPriceSQM);
    let sumPaint = (paintLiters) + (extraPaint);
    let totalPricePaint = (sumPaint) * (paintPriceLiter);
    let totalPriceDiluter = (diluterLiters) * (diluterPriceLiter);
    let totalMaterialsPrice = (totalPriceCovers) + (totalPricePaint) + (totalPriceDiluter) + (priceBags);
    let forLabourers = (totalMaterialsPrice * 0.3) * hoursNeeded;
    let totalSpenditure = (totalMaterialsPrice) + (forLabourers);
    console.log(totalSpenditure);
}

repainting(["5", "10", "10", "1"]);