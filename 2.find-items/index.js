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

function findItems(arr, callback) {
  let selectedItem = [];

  for (const item of arr) {  
    if (callback(item)) {
      selectedItem.push(item);
    }
  }
  
  // see the result
  // console.log(selectedItem);

  return selectedItem;
}