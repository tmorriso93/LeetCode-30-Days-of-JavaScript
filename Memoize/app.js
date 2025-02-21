

function memoize(fn) {
    const cache = {};  // to store the results of the function
    return function(...args) {
        const key = JSON.stringify(args);

        if (key in cache) {
            return cache[key]; // if the result is already in the cache, return it
        }
        cache[key] = fn(...args);
        return cache[key];
    }
}

let callCount = 0;
  const memoizedFn = memoize(function (a, b) {
 	 callCount += 1; // to check how many times the function is called
    return a + b;
  })

console.log(  memoizedFn(2, 3));