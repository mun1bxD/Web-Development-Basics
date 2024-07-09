//spread operator is used when an array is passed as argument instead of value

function calculateSum(...Values){
    let sum=0;
    for (let value in Values){
        sum+=Values[value];
    }
    console.log("Sum is:",sum);
}

let array=[12,24,2,4,34];

calculateSum(...array);

//for multiple datatype as an argument

function printName(num,...Names){
    for(let n in Names){
        console.log("Names",Names[n]);
    }
}

let array_names=["Harry","Steve","broad"];
printName(10,...array_names);

