//call backs 
//let change the heading and color in loop using call back
let h1=document.getElementById("heading1");

function Change_heading_and_Color(H_name,H_color,Call_adjacent_color){
    setTimeout(() => {
        h1.style.color=H_color;
        h1.textContent=H_name;
        if(Call_adjacent_color) 
            Call_adjacent_color();
    }, 1000);
}

Change_heading_and_Color("New Heading1","Red", ()=>{
    Change_heading_and_Color("New Heading22","Yellow",()=>{
        Change_heading_and_Color("New Heading333","blue",()=>{
            Change_heading_and_Color("New Heading4444","green")
        }); 
    });
});

