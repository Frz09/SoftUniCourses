function oldLibrary(input) {
    let bookToFind = input[0];
    let books = input[1];
    let index = 1;

    while (books !== "No More Books") {
        books = input[index];
        if (books === "No More Books") {
            console.log("The book you search is not here!");
            console.log(`You checked ${index - 1} books.`);
            break;
        }
        else if (books === bookToFind) {
            console.log(`You checked ${index - 1} books and found it.`);
            break;
        }
        index++;
        continue;

    }
}

oldLibrary(["Troy",
"Stronger",
"Life Style",
"Troy"])
;