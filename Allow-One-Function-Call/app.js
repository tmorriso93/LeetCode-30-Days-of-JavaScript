

// Given a function fn, return a new function that is identical to the original
// function except that it ensures fn is called at most once.

//     The first time the returned function is called, it should return the same result as fn.
//     Every subsequent time it is called, it should return undefined.


var once = function(fn) {
    let called = false; //Step 1: keep track if function has been called

    return function(...args){ //step 2: return a new function that takes arguments
        if (!called) { // step3: if function hasn't been called yet
            called = true; // mark is as called
            return fn(...args); // call the original function with arguments
        }
        return undefined; // step 4: if it's already been called, return undefined 
    }
};

const onceFn = once((a, b, c) => a + b + c);

console.log(onceFn(1, 2, 3)); // Output: 6 (first call works)
console.log(onceFn(1, 2, 3)); // Output: 6 (first call works)