
arr = [5, 4, 1, 2, 3];

// We’ll use the .sort() method. It lets us give a compare function, which tells JavaScript how to sort.

// So if we want to sort by fn(x) for each x, we can write:

var sortBy = function(arr, fn) {

    // If fn(a) < fn(b), keep a before b

    // If fn(a) > fn(b), put b before a
    return arr.sort((a, b) => fn(a) - fn(b));
};

console.log(sortBy(arr, (x) => x));