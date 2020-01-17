///////////////////////
// IV. Sync vs. Async

console.log("Hello!"); // 1 
setTimeout(() => console.log("How are you?"), 0); //3 
console.log("Great! What day is it? "); // 2
setTimeout(() => console.log("I think it's Friday"), 0); // 4 
//What order will the console.logs appear in?