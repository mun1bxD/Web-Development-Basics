let num1=5;
let num2=10;
let sum=num1+num2;
// we ue backticks `` to print this expression
console.log(`the sum of two number is ${sum}`);


//for multiple lines

let line=`Select Users & Accounts,
 then select your account.
  Select Subscriptions.`;

console.log(line);

//for html tags

let html_boiler=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   sum is ${sum} 
</body>
</html>`

console.log(html_boiler);

//nested tempelate literals

let firstname=`steve`;
let lastname=`peterson`;

console.log(`full name is ${firstname} ${lastname}`);