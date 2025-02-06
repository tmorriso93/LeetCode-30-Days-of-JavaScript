//Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

 

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 

// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.

// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.




var map = function(arr, fn) {
    const result = []; //create an empty array to store the results

    //Iterate through each element in the array
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i)); //Apply the function and store the result
    }

    return result; //Return the new array
};

// Test case 1
const arr1 = [1, 2, 3];
const fn1 = (num, i) => num + 1;
console.log(map(arr1, fn1));

// Test case 2
const arr2 = [10, 20, 30];
const fn2 = (num, i) => num * 2; //multiply each element by 2
console.log(map(arr2, fn2));