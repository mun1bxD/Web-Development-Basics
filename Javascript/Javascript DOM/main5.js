
let p=document.querySelector("#fact_cat");
let button1=document.querySelector("#fact_button");

button1.addEventListener("click",async()=>{
     let value=await facts();
     if(value){
     p.innerText=value;
     }
 });

url="https://catfact.ninja/fact";

async function facts(){
    try{
        let result=await axios.get(url);
        return result.data.fact;  
    }
    catch(error){
        console.log(error)
    }   
}
