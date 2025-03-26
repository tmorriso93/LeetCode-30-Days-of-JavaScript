//Given an object or an array, return if it is empty.

//Object.keys(obj) gets all the keys of the object (if it's an object) or indexes (if it's an array).

//.length checks how many keys or elements there are. 

// If there are 0 keys or elements, it's empty (true); otherwise, it's not (false).


var isEmpty = function(obj) {
    return Object.keys(obj).length === 0;
  };

  let obj = {};
  console.log(isEmpty(obj));


  // the same function can be written to return a message depending on whether the object is empty or not:
  var isEmpty2 = function(obj) {
    if (Object.keys(obj).length === 0) {
         return "empty";
    } else {
         return "not empty";
    }
 };
 
 let obj2 = {};
 console.log(isEmpty2(obj2));
 
 let obj3 = {car: "porsche", color: "black"};
 console.log(isEmpty2(obj3));