// Breaking It Down
// Step 1: Call fn Normally

// Since fn is asynchronous, calling it will return a Promise. We need to await it.
// Step 2: Create a Timeout

// We use setTimeout to reject the function after t milliseconds.
// Step 3: Use Promise.race

// This waits for the first Promise that finishes:

//     If fn finishes first, return the result.
//     If the timeout finishes first, reject with "Time Limit Exceeded".

var timeLimit = function(fn, t) {
    return async function(...args) {
        return Promise.race([
            fn(...args), // Run the function normally
            new Promise((_, reject) => 
                setTimeout(() => reject("Time Limit Exceeded"), t) // Timeout
            )
        ]);
    };
};
