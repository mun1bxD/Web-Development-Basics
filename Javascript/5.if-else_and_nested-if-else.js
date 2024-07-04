// if else

let a=10;
let b=10.5;

if(a==b){
    console.log("Values are equal");
}
else{
    console.log("values are not equal");
}

//nested if else 
//finding largest number three numbers

let num1=20;
let num2=30;
let num3=10;
let largest;

if (num1 >=num2) {
    if (num1 >=num3) {
        largest =num1;
    } 
    else {
        largest =num3;
    }
} else {
    if (num2 >=num3) {
        largest =num2;
    } 
    else{
        largest =num3;
    }
}

console.log(`Largest number is ${largest}`);
