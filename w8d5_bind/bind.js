

//////////////////////
// II. Ways to invoke a function

function Dog(name) {
    this.name = name;
    console.log(this);
}

Dog.prototype.eat = function (...moreFood) {
    let msg = `${this.name} has eaten ${moreFood}`;
    console.log(msg)
}

// 1. constructor style
// this: object created 
blue = new Dog("Blue");

// // 2. method style 
// // this: blue (the receiver)
blue.eat('apple', 'chips', 'carrots');


// // 3. function style 
// // this: the global window
Dog.prototype.bark = function (otherDogs) {
    console.log(`${this.name} is barking at ${otherDogs}`)
    console.log(this);
}

let bark = Dog.prototype.bark;

bark(); // what happens here? 

// // 4. apply
console.log("From apply:");

bark.apply(blue, ['chloe']);

// 5. call 
console.log("From call:");
bark.call(blue, "zoe");

// 6. bind 
console.log("From bind:");

let bindedBark = bark.bind(blue);
console.log(bindedBark);
// bindedBark("chloe");

console.log(bindedBark === bark);

// ///////////////////////
// // III. How do we implement bind? 

Function.prototype.myBind = function(context, args){
    let that = this;
    return function(){
        return that.apply(context, args);
    }
}


console.log('From myBind: ');
bark.myBind(blue, ["chloe"])();

