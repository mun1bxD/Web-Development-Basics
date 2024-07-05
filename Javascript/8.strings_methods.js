let heading= "There are several built-in methods available for manipulating strings";
//all character in lower case
console.log(heading.toLowerCase());

//all character to upper case
console.log(heading.toUpperCase());

//index of first a
console.log(heading.indexOf("a"));

//index of last a present

console.log(heading.lastIndexOf("a"));

//extract string between index 2 and6
console.log(heading.slice(2,4));

//return string between 4 and 10
console.log(heading.substring(4,10));

//concatenate string
console.log(heading.concat(" variables"));

//replace string
console.log(heading.replace("several","different"));

// converting in array of word when empty char comes
console.log(heading.split(' '));

//check if true or not
console.log(heading.startsWith("10"));

console.log(heading.endsWith("variables"));

//check a is present
console.log(heading.includes("a"));

//char at index 10
console.log(heading.charAt(10));

//remove empty spaces
let name1="Harry  ";
console.log(name1.trim());

let color=['white','green','yellow'];
console.log(color.join(","));
