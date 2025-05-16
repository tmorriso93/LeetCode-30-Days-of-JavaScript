
var flat = function (arr, n) {
    const result = [];

    function helper(current, depth) {
        for (let item of current) {
            if (Array.isArray(item) && depth < n) {
                // If it's an array and we still have depth left, recurse
                helper(item, depth + 1);
            } else {
                // If it's not an array or we've reached the max depth, push it
                result.push(item);
            }
        }
    }
    helper(arr, 0); // start at depth 0
    return result;
}

console.log(flat(
    [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
    1
  ));
