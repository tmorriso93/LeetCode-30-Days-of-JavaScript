

// Write a function argumentsLength that returns the count of arguments passed to it. 

// Steps
// We use ...args to grab all arguments and store them in an array.
// We use args.length to count how many things were passed in.
// We return args.length, which gives the correct count.

var argumentsLength = function(...args) {
    return args.length;

};

console.log(argumentsLength(5));
console.log(argumentsLength(5,6,7,8));