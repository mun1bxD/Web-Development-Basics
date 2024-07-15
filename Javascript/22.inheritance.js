class numbers{
    constructor(num1,num2){
        this._num1=num1;
        this._num2=num2;
    }
    get num1(){
        return this._num1;
    }
    get num2(){
        return this._num2;
    }
}
class sum extends numbers{
    total=0;
    constructor(v1,v2){
        super(v1,v2);
    }

    get calculated_sum(){
        this.total=this._num1+this._num2;
        return this.total;
    }

    print(){
        console.log("Sum of two number is",this.calculated_sum);
    }
}

const sumObj=new sum(10,20);
sumObj.print();


//Example2 of same code

class Animal {
    speak() {
      console.log('Animal makes a sound');
    }
  }
  
class Dog extends Animal {
    speak(){
      super.speak();
      console.log('Dog barks');
    }
  }
  
const dog = new Dog();
  dog.speak(); 
  