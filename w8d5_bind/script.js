// I. Ways to declare a function 
// 1. Named 
    namedFunc();
    function namedFunc(name){
        console.log(`I am a named function called ${name}`);
    }

// 2. Anonymous 
    // a. function declaration
    let anonFunc = function(){
        console.log("I am an anonymoys function");
    }
    anonFunc();

    // b. fat arrow notation (single vs. multi-line)
        let singleArrow = () => `From singleArrow function: ${5 * 5}`;

        let multiArrow = () => {
            return `From multiArrow function: ${5 * 5}`;
        }

        console.log(singleArrow());
        console.log(multiArrow());

