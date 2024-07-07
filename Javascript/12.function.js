//function 
let num=10;
let num2=20;

function add(){
    console.log("Sum of two function is",num+num2);
}

add();

//function expression
const fullname=function(firstname,lastname){
    return firstname+" "+lastname;
}

console.log("My name is",fullname("steve","harry"));


//calculating largest number in an array

const largest_number=function(array){
    let x=0;
    for(let i=0;i<array.length;i++){
        if(x<array[i]){
            x=array[i];
        }
    }
    return x;
}


let array=[3,4,5,2,7,4,9];

 console.log("Largest number is ",largest_number(array));

 
 //high order function
 
 const high_order = function(addition, number3) {
    return function(a, b) {
        return addition(a, b) + number3;
    };
};

const addition = function(a, b) {
    return a + b;
};

const resultFunction = high_order(addition, 4);
const result = resultFunction(2, 3);
console.log("Sum of all three numbers is", result);  // Output: Sum of all three numbers is 9


 //hight order function

let fruits=["Apple","Banana","Mango","Orange"];

const num_element=function(fruits){
    return fruits.length;
}

const print_fruit=function(num_element,fruits){
    console.log("Number of element",num_element(fruits));
    for(let i of fruits){
        console.log(i);
    }
}

print_fruit(num_element,fruits);