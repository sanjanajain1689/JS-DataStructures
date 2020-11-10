var arr=new Array();
for(i=0;i<10;i++){
arr[i]=Math.floor(100+Math.random()*900);
}
console.log("Random Number Array: "+arr);
arr.sort();

console.log("2nd Highest- "+arr[8]);
console.log("2nd Lowest- "+arr[1]);