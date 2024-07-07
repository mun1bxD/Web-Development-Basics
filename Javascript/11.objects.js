//objects

let student={
    name:"harry",
    class:10,
    id:216323,
    department:"CS"
};

let std_name=student.name;
let std_id=student.id;

console.log(`student info:\nName:${std_name}\nid:${std_id}`);

//modifing  properties
student.name="Jerry";
student.id=236424;

console.log(student);

//nested object

let father={
    Name:"steve",
    age:60,
    son:{
        blood_group:"B+",
        address:"england"
    }
};

console.log("Son address is",father.son.address);

//array of object

let library=[
    {
        Book:"title1",
        author:"author1",
        edition:2
    },
    {
        Book:"title2",
        author:"author2",
        edition:3
    },
    
    {
        Book:"title3",
        author:"author3",
        edition:4
    }

]

console.log("First book is",library[0].Book);

//adding another book
library.push({Book:"title4",author:"author4",edition:5});

console.log(library);

