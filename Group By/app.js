//create a function that takes an array of objects and groups them by a property
// Basically any item in the array with the same name will be grouped together


// look at this function as a sorting machine that groups array items together with the same name 
Array.prototype.groupBy = function(fn) {
    const grouped = {}; // This is our object with the boxes

    for (let item of this) { // Go through every item in the array
        const key = fn(item); // Use the function to get the label for the box

        if (!grouped[key]) {
            grouped[key] = []; // If this box doesn’t exist yet, make it!
        }
        grouped[key].push(item); // Put the item into the right box
    }
    return grouped; // Return the boxes with grouped items
};

// Example 1
const arr = [1, 2, 3, 4, 1, 1, 5, 2, 3];
const result = arr.groupBy(String);
// console.log(result); 

// Output: 
// {
//     '1': [ 1, 1, 1 ],
//     '2': [ 2, 2 ],
//     '3': [ 3, 3 ],
//     '4': [ 4 ],
//     '5': [ 5 ]
//   }

// Example 2
const arr2 = [
    {"id": "1"},
    {"id": "1"},
    {"id": "2"}
  ];
  
  const idNum = item => item.id;
    // Use the id property to group the items
  console.log(arr2.groupBy(idNum));

// Output:
// { '1': [ { id: '1' }, { id: '1' } ], '2': [ { id: '2' } ] }

// Example 3
  const arr3 = [
    {"city": "toronto", "over18": true},
    {"city": "montreal", "over18": false},
    {"city": "montreal", "over18": true},
    {"city": "toronto", "over18": false},
    {"city": "toronto", "over18": true}
  ]

  // seperate by city
  const carShow = item => item.city;
  // seperate by adults
  const buyers = item => item.over18;
  // console.log(arr3.groupBy(carShow))
  console.log(arr3.groupBy(buyers));



const arr4 = [
    {"id": "1", "name": "John"},
    {"id": "2", "name": "John"},
    {"id": "3", "name": "Jane"},
    {"id": "4", "name": "Jane"},
    {"id": "5", "name": "John"},
    {"id": "6", "name": "Jane"}
  ];
  
  const duplicateNames = item => item.name;
    // Use the name property to group the items by name
  console.log(arr4.groupBy(duplicateNames));

// Output:
// {
//     John: [
//       { id: '1', name: 'John' },
//       { id: '2', name: 'John' },
//       { id: '5', name: 'John' }
//     ],
//     Jane: [
//       { id: '3', name: 'Jane' },
//       { id: '4', name: 'Jane' },
//       { id: '6', name: 'Jane' }
//     ]
//   }