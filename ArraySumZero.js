let intArray=[-3,-2,-1,1,2,3];
let triplet=new Array();
let output=new Array();

for(var x = 0; x < intArray.length; x++){
    for(var y = x; y < intArray.length; y++){
        for(var z = y; z < intArray.length; z++){
            if(intArray[x] + intArray[y] + intArray[z] == 0){
                triplet.push(intArray[x], intArray[y], intArray[z]);
                output.push(triplet);
                triplet = [];
            }
        }
    }
}
console.log("The triplets are: ");
console.log(output);