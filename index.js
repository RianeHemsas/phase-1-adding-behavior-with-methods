// Your code here


class Cat {
   constructor(name,sex){
    this.name=name;
    this.sex=sex;

   }
   speak(){
    return `${this.name} says meow!`
   }
  }
  
  const newCat = new Cat("Sasha", "female")
  console.log(newCat);
  console.log(newCat.speak());

  class Dog {
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    
       }
       speak(){
        return `${this.name} says woof!`
       }
  }
  const newDog = new Dog("Rufio", "male")
  console.log(newDog);
  console.log(newDog.speak());
  
  class Bird {
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    
       }
       speak(){
        if(this.sex==="male"){
        return `It's me! ${this.name}, the parrot!`
       }
       else{
        return `${this.name} says squawk!`

       }
  }
}

const newBird1 = new Bird("Pablo", "male")
const newBird2 = new Bird("Mable", "female")
  console.log(newBird1);
  console.log(newBird1.speak());
  console.log(newBird2);
  console.log(newBird2.speak());
  