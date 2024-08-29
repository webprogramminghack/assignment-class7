const arrayOfObjects = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
];

const result = findItems(arrayOfObjects, function (item) {
  return item.id < 3;
});

function findItems(arr, item) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (item(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(result);

// Read the README.md file first
// Expected output [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ]
// Make the function findItems as a function declaration here
