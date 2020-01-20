
// 6.  How is webpack beneficial for building client code?
    // webpack is a module bundler, allows us on browser to load multiple modules without having to manage the order they are loaded manually and pollute the global namespace
    // require is available in node but not in browser 
    // it takes an input file and outputs a bundle.js file which includes all of the modules we need 

// commands: 
// check you have webpack installed: 
    // npm install -g webpack webpack-cli
// Make an output file based on entry and run webpack
    // webpack --watch root.js bundle.js 
// Create dist/main.js file 
    // webpack --watch --mode=development