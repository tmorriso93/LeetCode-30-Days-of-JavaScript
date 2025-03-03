
// await pauses and waits for a promise to resolve.

// We store the resolved values in value1 and value2.

// We return their sum, which is wrapped in a promise automatically.

var addTwoPromises = async function(promise1, promise2) {
    let value1 = await promise1;
    let value2 = await promise2;
    return value1 + value2;
};

let promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
let promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2).then(console.log);// 7