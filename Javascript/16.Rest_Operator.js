//rest operator for single datatype
function sum(...rest){
    let sum=0;
    for(let i in rest){
        sum+=rest[i];
    }
    console.log("Sum of all value is",sum);
}

sum(20,30,40);
sum(20,30,40,40);
sum(20,30,40,30,50);

//rest for multiple datatype

function print(name, ...restValue){
    for(let j in restValue){
        console.log("Value at",[j],":",restValue[j]);
    }
}

print("harry",20,40,50,22,10);

//rest operator convert all rest value into an array 