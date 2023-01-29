function examPrep(input) {
    let allowedBadGrades = Number(input[0]);
    let index = 1;
    let badGrades = 0;
    let goodGrades = 0;
    let sumGrades = 0;
    let lastProblem = "";
    let grade = 0;
    let averageScore = 0;

    while (badGrades < allowedBadGrades) {
        if (index % 2 != 0) {
            lastProblem = input[index];
            if (lastProblem === "Enough") {
                averageScore = sumGrades / (goodGrades + badGrades);
                lastProblem = input[index - 2];
                console.log(`Average score: ${averageScore.toFixed(2)}`);
                console.log(`Number of problems: ${goodGrades + badGrades}`);
                console.log(`Last problem: ${lastProblem}`);
                break;
            }
        }
        else if (index % 2 === 0) {
            grade = input[index];
            if (grade <= 4) {
                badGrades++;
            }
            else {
                goodGrades++;
            }
            sumGrades = Number(grade) + Number(sumGrades);
        }
        index++;
    }
    if(badGrades === allowedBadGrades){
        console.log(`You need a break, ${badGrades} poor grades.`);
    }
}

examPrep(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
;