
// this function will return the last element in an array
// if there is no last element, it will return -1
function getLastElement(arr) {
    // if the array is empty, return -1
    if (arr.length === 0) {
        return -1;
    }
     // otherwise return the last element
    return arr[arr.length - 1];
}
// this function will return the first element in an array  

// OR 

// Array.prototype.last = function() {
//     // if the array is empty, return -1
//     if (this.length === 0) {
//         return -1;
//     }

//     // otherwise return the last element
//     return this[this.length - 1];
// };

console.log(getLastElement([1, 2, 3, 4, 5])); // 5
// if there is no first element, it will return -1

console.log(getLastElement([])); // -1  