//array creation
let arr=[1,2,3,4,5];

let index_2=arr[2];

console.log(index_2);

//changing value of index2
arr[2]=20;

console.log(arr[1],arr[2]);


//methods
let last_element=arr.pop();
console.log("last element is :"+last_element);

let add_last=arr.push(5);
console.log("element push is "+arr[4]);

let first_element=arr.shift();
console.log("First element is "+first_element);

let index_of_4=arr.indexOf(4);
console.log("Array is: "+arr);
console.log("Index of four is "+index_of_4);

let reverse_arr=arr.reverse();
console.log("Reverse array is :"+reverse_arr);

let sorted_acc=arr.sort((a,b)=>a-b);
console.log("Sorted array is "+sorted_acc);

let sorted_dec=arr.sort((a,b)=>b-a);
console.log(sorted_dec);

let triple = arr.map(element => element * 3); 
console.log(triple);//multiply each index by 3

let new_arr=arr.filter(element=>element%2===0);
console.log(new_arr);

//joining array and print it as a string
let final_array=arr.concat(new_arr).join(",").toString();
console.log(final_array);

//nested array or 2-D array

let two_D_arr=[[1,2,3],[4,5,6],[7,8,9]];
console.log(two_D_arr);

console.log("Value at"+two_D_arr[1][2]);