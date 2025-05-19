// You're given a JavaScript object or array. Your job is to remove all "falsy" values from it.

// Falsy values in JavaScript are things that, when you run Boolean(value) on them, you get false

//  Examples: 
//  false
//  0
//  ""
//  null
//  undefined
//  NaN

// What's a "compact object"?
// Any key or value in an object that has a falsy value? Remove it.

var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        return obj 
            .map(item => compactObject(item)) // clean each item 
            .filter(Boolean); // remove falsy ones
    } else if (obj !== null && typeof obj === 'object') {
        let newObj = {};
        for (let key in obj) {
            const value = compactObject(obj[key]); // clean the value 
            if (Boolean(value)) {
                newObj[key] = value;
            }
        }
        return newObj;
    } else {
        return obj; // return as-is (primitive)
    }
};

console.log(compactObject({"a": null, "b": [false, 1]}));
