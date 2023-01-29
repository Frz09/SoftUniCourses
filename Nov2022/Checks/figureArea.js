function figureAreas(input) {
    let figureType = input[0];
    if (figureType === "square") {
        let squareSide = Number(input[1]);
        let squareArea = (squareSide * squareSide).toFixed(3);
        console.log(squareArea);
    }
    else if (figureType === "rectangle") {
        let rectangleSide1 = Number(input[1]);
        let rectangleSide2 = Number(input[2]);
        let rectangleArea = (rectangleSide1 * rectangleSide2).toFixed(3);
        console.log(rectangleArea);
    }
    else if (figureType === "circle") {
        let circleRadius = Number(input[1]);
        let circleArea = (circleRadius * circleRadius * Math.PI).toFixed(3);
        console.log(circleArea);
    }
    else if (figureType === "triangle") {
        let triangleSide = Number(input[1]);
        let triangleHeightToSide = Number(input[2]);
        let triangleArea = (0.5 * triangleSide * triangleHeightToSide).toFixed(3);
        console.log(triangleArea);
    }
    else {
        console.log("Cannot identify figure");
    }
}

figureAreas(["trianle","4.5","20"]);