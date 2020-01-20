// 1. How are prototypes different from constructor Functions?
// - unlike class inheritance, everything is an object and we ue prototypes to link inheritance through the __proto__ property which points to the prototype of the superclass 
// 2. How are classes/constructors connected to one another in a prototypal inheritance chain?
// 3. How is prototypal inheritance different from classical inheritance?


  function Dog (name) {
    this.name = name;
  }
  
  Dog.prototype.bark = function () {
    console.log(this.name + " barks!");
  };

  let blue = new Dog("blue");

  console.log(`Dog: name returns: ${Dog.hasOwnProperty("name")}`); // ? 
  console.log(`Dog: bark returns: ${Dog.hasOwnProperty("bark")}`); // ? 
  console.log(`Dog proto bark returns: ${Dog.__proto__.hasOwnProperty("bark")}`); // ? 
  console.log(`blue's __proto__ is: ${blue.__proto__}`) // ? 


  
//   // `Function.prototype.inherits` using surrogate trick

Function.prototype.inherits1 = function (ParentClass) {
    function Surrogate () {}
    Surrogate.prototype = ParentClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
  };
 
  // `Function.prototype.inherits` using `Object.create`

Function.prototype.inherits2 = function (BaseClass) {
    this.prototype = Object.create(BaseClass.prototype);
    this.prototype.constructor = this;
  };

  // we want class Corgis to inherit from superclass Dog  
  
  function Corgi (name) {
    Dog.call(this, name);
  }
  
  Corgi.inherits1(Dog);
  
  Corgi.prototype.waddle = function () {
    console.log(this.name + " waddles!");
  };
  
//   const blixa = new Corgi("Blixa");
//   console.log(blixa.bark());
//   console.log(blixa.waddle());
//   console.log(blue.waddle());

//////////// ES2015 
class Yorki extends Dog {
    constructor(name){
        super(name);
    }
    eat(){
        return `${this.name} is eating`;
    }
}

let coco = new Yorki('coco');
console.log(coco.eat());