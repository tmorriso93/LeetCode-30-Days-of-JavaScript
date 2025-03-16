


var debounce = function(fn, t) {
    let timer; // Store the timer ID

    return function(...args) {
        clearTimeout(timer); // Cancel any existing timer
        timer = setTimeout(() => fn(...args), t); // Start a new timer
    };
};

//Test
let start = Date.now();

function log(...inputs) { 
    console.log([Date.now() - start, inputs]);
}

const dlog = debounce(log, 50);

setTimeout(() => dlog(1), 30);
setTimeout(() => dlog(2), 60);
setTimeout(() => dlog(3), 100);