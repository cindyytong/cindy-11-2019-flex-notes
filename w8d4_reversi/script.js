Array.prototype.myEach = function (cb) {
    for(let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
}

let logger = function (ele) {
    debugger
    console.log(ele); 
};


[1, 2, 3, 4, 5].myEach(logger);

