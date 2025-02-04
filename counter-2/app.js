//Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

//The three functions are:
//    increment() increases the current value by 1 and then returns it.
//    decrement() reduces the current value by 1 and then returns it.
//    reset() sets the current value to init and then returns it.


var createCounter = function(init) {
    let current = init; // Store the current value


    return {
        increment: function() {
            return ++current; // Increase first, then return
        },
        decrement: function() {
            return --current; // Decrease first, then return
        },
        reset: function() {
            current = init; // Reset back to the original value
            return current;
        }
    }
};




console.log(createCounter(5).increment());
console.log(createCounter(5).decrement());
console.log(createCounter(5).reset());

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
