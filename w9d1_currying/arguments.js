////// KEY CONCEPTS ////// 
// 1. How can we use arguments? What data type is it? 
function sum1() {
    let total = 0;
    console.log( `Arguments instance of Array?: ${arguments instanceof Array}`); // ? 
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
}
console.log(`calling sum1 with 1,2,3 gives us: ${sum1(1,2,3)}`);

console.log(`calling sum1 without any arguments gives us: ${sum1()}`); // ? 

// 2. How can we use the rest operator to make an array? 
function sum2(num1, ...otherNums) {
    let total = num1;

    console.log(`otherNums instance of Array?: ${otherNums instanceof Array}`) // ? 

    for (let i = 0; i < otherNums.length; i++) {
      total += otherNums[i];
    }
    return total;
  }
  console.log(`calling sum2 gives us: ${sum2(1,2,3)}`); //?

// 3. Use spread to destructure 
const myFunction = (a,b,c,d,e) => {
    console.log(a, b, c, d, e)
}
const args = [2,3];
`Using spread to destructure an array: ${myFunction(1, ...args, 4, ...[5])}`;

