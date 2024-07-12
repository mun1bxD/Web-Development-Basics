//get/set methods on DOM and query selector

//GET Methods

//taking inner text of tag
let paragraph=document.getElementById("paragraph1").innerText;
console.log(paragraph);


//to print html inner
let inner_section1=document.getElementById("section").innerHTML;
console.log(inner_section1);


//print value of attribute like id, class
let h1_attribute=document.getElementById("heading1").getAttribute("class");
console.log(h1_attribute);


//to print attribute name with attribute type
let h1_attribute_detail=document.getElementById("heading1").getAttributeNode("class");
console.log(h1_attribute_detail);


//print all attribute
let h1_All_att=document.getElementById("heading1").attributes;
console.log(h1_All_att);




//SET Methods
//before
let new_h1_val1=document.getElementById("heading1").innerHTML;
console.log(new_h1_val1);
//after
let new_h1_val2=document.getElementById("heading1").innerHTML="hello world";
console.log(new_h1_val2);


//setting new class name
document.getElementById("heading1").setAttribute("class","newh1");
//print the new class name using get function
let new_class_h1=document.getElementById("heading1").getAttribute("class");
console.log(new_class_h1);


//changing attribute using index

document.getElementById("heading1").attributes[0].value="class_heading";
//print the new class name using get function
let new2_class_h1=document.getElementById("heading1").getAttribute("class");
console.log(new2_class_h1);

//to remove attribute

document.getElementById("heading1").removeAttribute("class");


//query selector
//syntax document.querySelector(css selector)

//to print first match result
let header=document.querySelector(".head");
console.log(header);

//to print all matching
let sections=document.querySelectorAll("#section");
console.log(sections);