
const string="Hello world";

const FirstChar=string[0];
console.log(FirstChar);
//or
const secondChar=string.charAt(1);
console.log(secondChar);

//slicing substring

const FirstFiveChar=string.slice(0,5);
console.log(FirstFiveChar);

//or
const LastFiveChar=string.substring(6,11);
console.log(LastFiveChar);

//finding index
const index_d=string.indexOf("d");
console.log(index_d);

// finding index of sustring

const index_hello=string.indexOf("Hello");
console.log(index_hello);

//character or substring exist

const find_p=string.includes("p");
console.log(find_p);

const find_orl=string.includes("orl");
console.log(find_orl);  
