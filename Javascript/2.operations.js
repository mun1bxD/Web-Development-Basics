//adding two numbers
let a,b;
a=5;
b=10;
const sum =a+b;
console.log("Sum is:",sum)

// same for divide multiply mode and multiplication just chaning
const sub =a-b;
const mul =a*b;
const div =a/b;
const mod =a%b;

console.log("mode of 5",mod);

//exponent of a variable
//let five power 2
const power=5**2;
console.log("Result of 5^2 is :",power);

//for increment and decrement

let x=5;
x++;
//result is 6
console.log(x);
x-=2;
//result is 4
console.log(x);

//incrementing constant variable or value
const y=5;
//y++;
//the comment line is error line


//conditional operation

//use of ==
let num,string;
num=5;
string='5';

let equal = num==string;
console.log(equal) //true becaue 5=5

//use of ===
let notequal= num===string;
console.log(notequal) //false because string 5 not equal to int 5

//use of not !
let NowTrue= num!==string;
console.log(NowTrue);

//logical operation

let Number1=5,Number2=10;
//AND 
let result= (Number1<Number2)&& (Number2<9);
console.log("One condition is ",result);//false

//OR
let result2=(Number1<Number2)||(Number2<9);
console.log("One condtion is",result2);//true

//!
let result3=!(Number1<Number2);
console.log(result3);//false


//bitwise operation
//for bitwie we use we use single logical operator

let v1=5,v2=3;
let and_result=v1 & v2;
// 101
// 011
//----
// 001 
console.log("And result:",and_result);

let or_result=v1 | v2;
//101
//011
//-----
//111
console.log("Or Result:",or_result)

let xor_result= v1^v2;
//101
//011
//----
//110
console.log("Xor result:",xor_result);

let not_result=~v1;
//-6
console.log("Not operatior",not_result);

let right_shift=v1 >>1;
//right shift of one
//101=>010 or 2
console.log("Right shift",right_shift);

let left_shift=v1<<2;
//left shift of 2
//101=>10100 or 20
console.log("left shift",left_shift);

//concatenation
let firstname="peter";
let secondname="steve";


let fullname=firstname+secondname;
//or
firstname+=secondname;

console.log("Name:",firstname);
console.log("Name:",fullname);
