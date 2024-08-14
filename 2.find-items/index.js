const arrayOfObjects = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
];

const result = findItems(arrayOfObjects, function (item) {
  return item.id < 3;
});

console.log(result);
// Read the README.md file first
// Expected output [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ]
// Make the function findItems as a function declaration here
function findItems(array, callback) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    if (callback(el)) output.push(el);
  }
  return output;
}
