    var join = function (arr1, arr2) {
        const map = new Map();

        // First, add all items from arr1 ro the map
        for (let obj of arr1) {
            map.set(obj.id, { ...obj });
        }

        // Then, add /merge items from arr2
        for (let obj of arr2) {
            if (map.has(obj.id)) {
                // Merge with existing object; arr2 overrides arr1
                map.set(obj.id, { ...map.get(obj.id), ...obj });
            } else {
                map.set(obj.id, { ...obj });
            }
            }

            // Convert the map values to array and sort by id
            const result = Array.from(map.values());
            result.sort((a, b) => a.id - b.id);
            return result;
        };

// Test Code

// Sample data
const arr1 = [
    { id: 1, x: 1 },
    { id: 2, x: 9 }
];

const arr2 = [
    { id: 3, x: 5 }
];

// Test the function
console.log(join(arr1, arr2));
        