// 2. Why might we want to use currying?
// allows us to call curriedSum(1)(2)(3) 
// transforms a function that takes multiple arguments into a sequence of functions each taking one argument
function curriedSum(numArgs) {
    const numbers = [];
  
    function _curriedSum(num) {
      numbers.push(num);
  
      if (numbers.length === numArgs) {
        let total = 0;
  
        numbers.forEach((n) => { total += n; });
  
        return total;
      } else {
        return _curriedSum;
      }
    }
  
    return _curriedSum;
  }
  console.log(`Calling curriedSumis:${curriedSum(3)(1)(2)(3)}`);

console.log("----------------- Example 2 -------------------")
// We use currying to write reusable code 
// example: you own a store and you want to give 10% discount to your favorite customers 
function discount(price, discount) {
    return price * discount
}
// discount(500, .10)
// discount(600, .10)

// rewrite without needing to pass in .10 every time 
function discount(discount){
    return (price) => {
        return price * discount;
    }
}
const tenPercentDiscount = discount(0.1);
console.log(tenPercentDiscount(500));
console.log(tenPercentDiscount(600));

// monkey patching curry 
Function.prototype.curry = function(numArgs){
    const args = [];
    const fn = this; 

    function _curriedFn(arg) {
        args.push(arg);
        if(args.length === numArgs){
            return fn(...args);
        } else {
            return _curriedFn;
        }
    }
    return _curriedFn;
}

