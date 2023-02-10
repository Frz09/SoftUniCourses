function solve(bookPages,pagesRead,deadline) {
    let timeToReadTheBook = bookPages / pagesRead;
    let hoursNeededPerDay = timeToReadTheBook / deadline;
    console.log(hoursNeededPerDay);
}

solve(212,20,2);