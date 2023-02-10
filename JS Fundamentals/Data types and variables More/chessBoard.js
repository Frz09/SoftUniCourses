function solve(num) {

    let place = ``;

    for (let i = 0; i < num; i++) {
        if (i === 0 || i % 2 === 0) {
            place += ` <div>
`;
            for (j = 0; j < num; j++) {
                let tempB = `    <span class="black"></span>
`;
                let tempW = `    <span class="white"></span>
`;
                if (j === 0 || j % 2 === 0) {
                    place += tempB;
                } else if (j % 2 !== 0) {
                    place += tempW;
                }
            }
            place += `  </div>
`;
        }
        else if (i % 2 !== 0) {
            place += `  <div>
`;
            for (j = 0; j < num; j++) {
                let tempB = `    <span class="black"></span>
`;
                let tempW = `    <span class="white"></span>
`;
                if (j === 0 || j % 2 === 0) {
                    place += tempW;
                } else if (j % 2 !== 0) {
                    place += tempB;
                }
            }
            place += `  </div>
`;
        } else {};
    }

    console.log(`<div class="chessboard">
  ${place}</div>`);
}

solve(6);