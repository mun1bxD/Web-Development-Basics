//promises->it is an object

//resolve and reject call back

const checkNumber= (num)=>{
    return new Promise((resolve,reject)=>{
        if (num%2===0){
            resolve("The number is even");
        }
        else{
            reject("The number is odd");
        }
    })
}

checkNumber(2)
.then((result)=>{
    console.log(result);
})
.catch((result)=>{
    console.log(result);
})
.finally(()=>{
    console.log("Operation completed");
})



//Example2

function fetchUserData(){
    return new Promise((resolve,reject)=>{
        delay=2000;
        setTimeout(() => {
            if(delay<=2000){
                Showinfo();
                resolve("Successfully shown");
            }
            else{
                reject("Delay increased 2s");
            }
        }, delay);
    })
}
Showinfo=()=>{
    let user={ id: 1, name: 'John Doe', email: 'john@example.com' };
    console.log(user);
}


fetchUserData()
.then((result2)=>{
    console.log(result2);
})
.catch((result2)=>{
    console.log(result2);
})
.finally(()=>{
    console.log("Operation completed");
})
