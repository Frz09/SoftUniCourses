function readWords(input) {
    let index = 0;
    let string = input[index];
    index++;
    while(string !== "Stop") {
        console.log(string);
        string = input[index];
        index++;
    }
}

readWords(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"
]);