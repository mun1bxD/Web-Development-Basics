//normally we assign value like

let array=["harry",2004,23.2];

let Name=array[0];
let birth=array[1];
let marks=array[2];

console.log("Name",Name," Date of birth ",birth," Marks ",marks);

// in destructuring array

//Example1
let array2=["harry",2004,23.2];

let[Name2,birth2,marks2]=array2;

console.log("Name",Name2," Date of birth ",birth2," Marks ",marks2);

//Example2

let array3=[1,2,3,4,5,6];

let[v1,v2,...restValue]=array3;

console.log("Value1",v1,"Value2",v2,"Remaining array",restValue);

//Example3

const numbers = [1, 2];
const [first, second, third = 3] = numbers;

console.log(first);
console.log(second);
console.log(third);
