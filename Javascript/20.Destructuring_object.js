//same as destructuring array
const person = {
    name: 'Alice',
    age: 25,
    city: 'New York'
  };

let {name,age,city}=person;

console.log("Name ",name," Age ",age," City ",city);


//assigning to new variable

let {name:Student_name,age:Student_age,city:Student_city}=person;

console.log("Name ",Student_name," Age ",Student_age," City ",Student_city);

//Nested object Destructuring

const student = {
    Std_name: 'Alice',
    std_address: {
      street: '123 Main St',
      std_city: 'New York'
    }
  };

let {Std_name,std_address:{street,std_city}}=student;
console.log("Name ",Std_name," Street ",street," City ",std_city);

//Rest in object Destructuring
const person2 = {
    name2: 'Alice',
    age2: 25,
    city2: 'New York'
  };
  
  const { name2, ...rest2 } = person;
  
  console.log(name2);
  console.log(rest2);