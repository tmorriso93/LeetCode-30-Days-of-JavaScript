
// How sleep Works:

//     sleep(millis) starts by returning a new promise.
//     Inside the promise, setTimeout is used to wait for millis milliseconds.
//     Once the time passes, the resolve function is called, which completes the promise.
//     This means the program will "sleep" for millis milliseconds before moving on to the next line of code.


async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

let t = Date.now();  // Store the current time
sleep(100).then(() => {
  console.log(Date.now() - t);  // Output: 100 (approximately)
});