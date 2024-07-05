//for this we link an html file
//add this line in body of .html file <script src="7.alert_and_prompt.js"></script>
//making a calculator

let num1=prompt("Enter first number");

num1 = parseFloat(num1);//from string to float
let num2=prompt("Enter Second number");
num2 = parseFloat(num2);
let operation=prompt("Enter operation");

switch(operation){
    case "+":
        alert("Addition result is:"+(num1+num2));
        break;
    case "-":
        alert("Subtraction result is:"+(num1-num2));
        break;
    case "*":
        alert("Multiplication result is:"+(num1*num2));
        break;
    case "/":
        alert("div result is:"+(num1/num2));
        break;
    case "%":
        alert("Mod result  is:"+(num1%num2));
        break;
    default:
        alert("Operation not available");
}