


var cancellable = function(fn, args, t) {
    // Call fn immediately
    fn(...args);
    
    // Set up a repeated call every t milliseconds
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    // Return a cancel function to stop it
    return () => {
        clearInterval(intervalId);
    };
};
