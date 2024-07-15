class student{
    constructor(Name,Roll_No,Department){
        this.Name=Name;
        this.Roll_No=Roll_No;
        this.Department=Department;
    }
    print(){
        console.log("Name is: ",this.Name);
        console.log("Roll No is: ",this.Roll_No);
        console.log("Department is: ",this.Department);
    }
}

let obj=new student("Harry",345344,"Cyber Security");
obj.print();



// creating bank account wit private variable

class BankAccount{
    #Account_No;  //private variable
    #Balance;

    constructor(balance,account_no){
        this.#Account_No=account_no;
        this.#Balance=balance;
    }
    withdraw(amount){
        if(amount<=this.#Balance){
            this.#Balance-=amount
        }
        else{
            console.log("Not Enough money");
        }
    }
    deposite(amount){
        if(amount>0){
            this.#Balance+=amount;
        }
        else{
            console.log("Sorry not able to deposite <1");
        }
    }
    print(){
        console.log("Current Balance: ",this.#Balance);
    }
}

const BA=new BankAccount(10000,133244);

BA.withdraw(1000);
BA.deposite(-1);

BA.print();