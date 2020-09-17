// Your code here
class animal{
   constractor(name , gender) {
    this.name = name ;
    this.gender = gender ;
  }
  speak(){
    
  }
}
class Cat extends animal{
  constractor(name , gender) {
   this.name = name ;
    this.gender = gender ;
  }
  speak(){
    returns `${this.name} says meow!`;
  }
}

 cat = new Cat("Sasha", "female");
 cat.speak()

class Dog  extends animal{
  constractor(name , gender) {
    this.name = name ;
    this.gender = gender ;
  }
  speak(){
    returns `${this.name} says woof!`;
  }
}

let dog = new Dog("Rufio", "male");
 dog.speak() ;
 
 
 class Bird {
  constractor(name , gender) {
    this.name = name ;
    this.gender = gender ;
  }
  speak(){
    returns `It's me! ${this.name}, the parrot!`;
  }
}


 let bird = new Bird("Pablo", "male")
  bird.speak();
    let  bird2 = new Bird("Mable", "female")
    
    


