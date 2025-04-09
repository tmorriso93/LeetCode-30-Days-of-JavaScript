// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists
//  of subarrays each of length size. The length of the last subarray
//   may be less than size if arr.length is not evenly divisible by
//    size.

var chunk = function(arr, size) {
    let result = [];

    for (let i = 0; i < arr.length; i+= size) {
        let chunk = arr.slice(i, i + size); // take a "slice" of size legnth
        result.push(arr.slice(i, i + size));    // put that slice into the result  
    }

    return result;
};

console.log(chunk([1, 2, 3, 4, 5], 2)); 
console.log(chunk([1, 2, 3, 4, 5], 3)); 
console.log(chunk([1, 2, 3, 4, 5], 1)); 
