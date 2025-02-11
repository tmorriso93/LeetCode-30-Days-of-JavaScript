// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

//     arr[i] - number from the arr
//     i - index of arr[i]

// Example 1:

// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10


var filter = function(arr, fn) {
    // Step 1: Create an empty array to store filtered elements
    const filteredArr = [];

     // Step 2: Loop through each element in the array
    for(let i = 0; i < arr.length; i++){
        // Step 3: Call the fn function with the element and its index
        if(fn(arr[i], i)) {
            // If fn returns true, add the element to the filtered array
                filteredArr.push(arr[i]);
            }
        }
    
        // Step 4: Return the filtered array
        return filteredArr;

};

arr = [0, 10, 20, 30];
fn = function greaterThan10(n) { return n > 10; };

console.log(filter(arr, fn)); // [1]