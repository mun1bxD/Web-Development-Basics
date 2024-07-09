//Normal objects
let student={
    Name:"Harry",
    Roll_No:225417
};

let Name="harry broad";
let Roll_No=264421;

student.Name=Name;
student.Roll_No=Roll_No;

console.log(student);

//if datatype and value have same name i.e Name and Name then we can write

// Declare and initialize the variables first
let newName="harry broad";
let newRoll_No=264421;

let New_student={
    newName,
    newRoll_No
};

New_student.newName=newName;
New_student.newRoll_No=newRoll_No;

console.log(student);


//using property with []

let model="CarModel";

let car={
    //we can easily modity property name.
    [model+" and Company"]:"2009 Honda",
    color:"black",

    detail:function(){
        return `${"CarModel and Company"} is ${"2009 Honda"}`;
    }
};

console.log(car);
console.log(car.detail());
