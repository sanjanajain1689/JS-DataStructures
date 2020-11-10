function digitsRepeated(number) {
    let unitplace = number % 10;
    let tensplace = Math.floor(number / 10);
    if(unitplace == tensplace)
        return 1;
    return 0;
}
let repeatedDigitsArray = new Array();

for(var i = 0; i < 100; i++) {
    if(digitsRepeated(i) == 1)
        repeatedDigitsArray.push(i);
}

console.log(repeatedDigitsArray.toString()); console.log("End");
