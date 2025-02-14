





var reduce = function(nums, fn, init) {
   // step 1: start with the initial value
   let val = init;

   // step 2: loop through each element in the array
   for (let i = 0; i < nums.length; i++) {
    // step 3: update the value using the reducer function
    val = fn(val, nums[i]);
   }

   // step 4: return the final value
   return val;
};

let nums = [1, 2, 3, 4];
fn = function sum(accum, curr) { return accum + curr; };
init = 0;

console.log(reduce(nums, fn, init)); // 10