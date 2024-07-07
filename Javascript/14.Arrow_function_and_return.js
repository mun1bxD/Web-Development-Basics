    const multiply=(num1,num2)=>num1*num2;

    console.log("Multiplication Result is: ",multiply(4,5));

    const increment=num1=>++num1;

    console.log("Increment result is ",increment(2));

    //multi line arrow function
    const Calculation=(num1,num2,option)=>{
        let result=0;
        if(option==="+"){
            result=num1+num2;
        }
        else if(option==="-"){
            result=num1-num2;
        }
        else if(option==="/"){
            result=num1/num2;
        }
        else if(option==="*"){
            result=num1*num2;
        }
        return result;
    };

    console.log(Calculation(3,5,"/"));