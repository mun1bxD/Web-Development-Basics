let student={
    Name:"Steve",
    Roll_No:425934,
    Department:"Cyber Security",
    Grade:"A+",
    
    getName:function(){
        return this.Name;
    },
    ChangeGrade:function(Grade){
        this.Grade=Grade;
    },
};


console.log(student.Department);

let St_name=student.getName();
console.log("Name is",St_name,"\n");

//bank Account using

let BankAccount={
    Balance:10000,
    Account_No:264346,

    Deposite:function(Balance){
        this.Balance+=Balance;
    },
    WithDraw:function(Balance){
        this.Balance-=Balance;
    },
    CheckBalance:function(){
        console.log("Account No ",this.Account_No);
        console.log("Balance ",this.Balance);
    }
}

BankAccount.CheckBalance()

BankAccount.WithDraw(2000)

BankAccount.CheckBalance();