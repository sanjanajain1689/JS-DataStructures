function dieResult() {
    return Math.floor(Math.random() * 100) % 6 + 1; 
}
/* var i = 0;
while(true) {
    if(i == 10)
        break;
    console.log(dieResult());
    i++;
} */
let countMap = new Map();
let minKey;
let maxKey;
let maxValue = -1;
let minValue = 11;

while(true) {
    var number = dieResult(); 
    if(!countMap.has(number))
        countMap.set(number, 1);
    else {
        let count = countMap.get(number);
        countMap.set(number, ++count);
    }
    if(countMap.get(number) == 10) 
        break;
}

console.log(countMap);

for( let [key, value] of countMap) {
    if(value < minValue) {
        minKey = key;
        minValue = value;
    }
    if(value > maxValue) {
        maxKey = key;
        maxValue = value;
    }
}

console.log("Minimum times -> key: " + minKey + ", count: " + minValue);
console.log("Maximum times -> key: " + maxKey + ", count: " + maxValue);