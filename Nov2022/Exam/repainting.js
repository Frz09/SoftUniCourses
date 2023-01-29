function repainting(input) {
    let paintCans = Number(input[0]);
    let wallpaperRolls = Number(input[1]);
    let priceGloves = Number(input[2]);
    let priceBrushes = Number(input[3]);
    let pricePaint = 21.50;
    let priceWallpaper = 5.20;
    let brushesNumber = Math.floor(paintCans * 0.48);
    let glovesNumber = Math.ceil(wallpaperRolls * 0.35);
    let sum = (paintCans * pricePaint) + (wallpaperRolls * priceWallpaper) + (glovesNumber * priceGloves) + (brushesNumber * priceBrushes);
    let deliveryPrice = sum / 15;

    console.log(`This delivery will cost ${deliveryPrice.toFixed(2)} lv.`);
}

repainting(["21","18","5","2.2"]);