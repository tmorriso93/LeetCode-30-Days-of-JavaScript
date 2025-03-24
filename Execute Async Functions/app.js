
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;
        let hasFailed = false;

        functions.forEach((fn, index) => {
            fn().then(value => {
                if (hasFailed) return; // If one failed, ignore others
                results[index] = value; // Store result in correct order
                completed++;
                if (completed === functions.length) {
                    resolve(results); // All done, resolve with results
                }
            }).catch(error => {
                hasFailed = true;
                reject(error); // If any promise fails, reject immediately
            });
        });

        if (functions.length === 0) {
            resolve([]); // If no functions, return an empty array immediately
        }
    });
};

const promise = promiseAll([
    () => new Promise(resolve => setTimeout(() => resolve(5), 200))
  ]);
  
  promise.then(console.log); // [5] after 200ms