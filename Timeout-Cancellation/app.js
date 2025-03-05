// Summary

//     Start a timer to run fn after t milliseconds.
//     Return a function (cancelFn) that stops the timer if called early.
//     If cancelFn is called before t, fn never runs.
//     If cancelFn is called after t, fn has already executed.


var cancellable = function(fn, args, t) {
    // Start a timer that will run fn after t milliseconds
    let timer = setTimeout(() => fn(...args), t);

    // Return a function that cancels the timer
    return function cancelFn() {
        clearTimeout(timer);
    };
};

const cancelFn = cancellable((x) => console.log(x * 5), [2], 20);
setTimeout(cancelFn, 10);  // Cancel after 10ms