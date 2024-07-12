//Event in javascript

let button=document.querySelector("button");
//print the output when button is clicked
button.onclick=function(){
    console.log("Sum is ",2+2);
}

//to perform event when mouse  button is click

let mouser=document.querySelector("button");

mouser.onmouseenter=function(){
    console.log("hello");
};  

//adding event listner 
//change text with button press
document.getElementById("result").addEventListener("click",change_text);

function change_text(){
    document.getElementById("result").textContent="button clicked";
    
}

//changing heading one with button click

document.getElementById("result").addEventListener("click",function(){
    document.getElementById("heading1").textContent="New Heading";
})


//we can do the above two seperate work on on click as well

document.getElementById("result").addEventListener("click",function(){
    document.getElementById("paragraph1").textContent="New Heading";
    document.getElementById("paragraph1").style.backgroundColor="yellow";
})

//here one thing is important in css the property that containn hyphen will be used
//like background-color => backgroundColor (camel case)


//this event listner
//changing color with hover

let div=document.getElementsByClassName("content-box");
for(i=0;i<div.length;i++){
    div[i].addEventListener("mouseover", function(){
        this.style.backgroundColor="purple";
    });

    div[i].addEventListener("mouseout", function(){
        this.style.backgroundColor="";
    });
}

//keyboard events
//show alert with event button is click after input is entered
let input=document.getElementById("input-field");
input.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        alert(input.value);
    }
});

//event on form

let value=document.getElementById("form1");
value.addEventListener("submit",function(e){
    e.preventDefault();//prevet from moving to next page
    alert("Submitted");
});
