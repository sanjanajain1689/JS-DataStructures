var arr=new Array();
for(i=0;i<10;i++){
arr[i]=Math.floor(100+Math.random()*900);
}

console.log("Random Number Array: "+arr);

function findmax(a,b){
    return Math.max(a,b);
}

function findmax2(arr1){
max=arr1.reduce(findmax);
i=arr1.indexOf(max);
arr1.splice(i,1);
max2=arr1.reduce(findmax);
return max2;
}

function findmin(a,b){
    return Math.min(a,b);
}

function findmin2(arr1){
min=arr1.reduce(findmin);
i=arr1.indexOf(min);
arr1.splice(i,1);
min2=arr1.reduce(findmin);
return min2;
}

console.log("2nd Highest- "+findmax2(arr));
console.log("2nd Lowest- "+findmin2(arr));
