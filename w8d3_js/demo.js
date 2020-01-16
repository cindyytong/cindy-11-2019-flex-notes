// what does this return?
function doubler(arr) {
    return arr.map((ele) => { ele * 2 })
}

function doubler2(arr) {
    return arr.map((ele) => ele * 2);
}


console.log(doubler([1,2,3])); 

// how are variables hoisted? 
let favFood ;
console.log(favFood);
favFood = "Pizza";

// how are functions hoisted? 
sayHello();
function sayHello(){
    console.log("hello");
}



// How can a function be invoked? 
    // method style 
    // function style 
    // constructor style

    // what are the three levels of scope a function has access to? 
    function summation(arr){
        let sum = 1;

        function summer(){
            for(let i = 0; i < arr.length; i++){
                sum += arr[i];
            }
        }
        summer();
        return sum; 
    }

    console.log(summation([1,2,3,4]));


    // for, forEach 

    nums = [1,2,3];

    function myFor(arr){
        for (i = 0; i < arr.length; i++) {
            if( i === arr.length - 1){
                return arr[i]
            }
        }
    }

    myFor(nums);
    
    function myForEach(arr){
        arr.forEach(ele => {
            if(ele === arr[arr.length - 1]){
                return ele;
            }
        })
    }

    myForEach(nums);



function myForEach2(arr) {
    let last;
    arr.forEach(ele => {
        if (ele === arr[arr.length - 1]) {
            last = ele;
        }
    });
    return last;
}

myForEach2(nums);
    

// How do we instantiate an array with 3 rows and 2 columns? 