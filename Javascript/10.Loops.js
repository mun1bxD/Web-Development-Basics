//for loop

let num1=10
//print even number
console.log("Even number:");
for(i=0;i<num1;i++){
    if(i%2==0){
        console.log(i);
    }
}

//while loop
let arr=[12,13,24,45,65];
let sum=0;
let j=0;
while(j<4){
    sum+=arr[j];
    j++;
}
console.log("Sum of all number is",sum);

//for of loop

let fruit=["Apple","Orange","Mango","pineapple"];
for(let element of fruit){
    console.log(element);
}

let string1="Hello world";
for(let element2 of string1){
    console.log(element2+",");
}

//nested for of loop
let num_arr=[[1,2,3],[4,5,6],[7,8,9]];
let total=0;
let flattened_arr=[];

for(let i of num_arr){
    for(let j of i){
        flattened_arr.push(j);
        total+=j;
    }
}
console.log("Flat array is :",flattened_arr);
console.log("Total is:",total);