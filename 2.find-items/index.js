const arrayOfObjects = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
];

const result = findItems(arrayOfObjects, function (item) {
  return item.id < 3;
});

// Read the README.md file first
// Expected output [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ]
// Make the function findItems as a function declaration here


//using filter method from array
function findItems(array, callback) {
  return array.filter(callback);
}


// using custom logic
/*
function findItems(array, callback) {
  const result = []; 

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]); 
    }
  }

  return result;
}
*/

console.log(result);
