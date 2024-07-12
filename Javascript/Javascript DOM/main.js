//target DOM object base on classname, idname, tagname

let heading;
//targeting by class name
heading=document.getElementsByClassName("main-heading");

//result will be shown in console window when inspect
console.log(heading);

//to show title of page
let title=document.title;
console.log(title);

//target by idname

let para1=document.getElementById("paragraph1");
console.log(para1);

//target all p tag of a document.
let all_para=document.getElementsByTagName("p");
console.log(all_para);

//printing by index
let all_index=document.getElementsByTagName("p");

if(all_index.length>3){
    console.log("value at index3",all_index[3]);
}
else{
    console.log("index value not available");
}

//printing base url

let URL=document.baseURI;
console.log(URL);
