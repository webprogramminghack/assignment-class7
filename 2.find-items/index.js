// const arrayOfObjects = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' },
//   { id: 4, name: 'David' },
// ];

// const result = findItems(arrayOfObjects, function (item) {
//   return item.id < 3;
// });

// Read the README.md file first
// Expected output [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ]
// Make the function findItems as a function declaration here

function findItems(array, callback) {
  const result = []; //  membuat array kosong

  //  membuat perulanagan pad array
  for (let i = 0; i < array.length; i++) {
    const item = array[i];

    // item cek funsgi calback
    if (callback(item)) {
      //  jika callback betul maka tambhakn ke item arraynya
      result.push(item);
    }
  }

  return result; // return ke array
}

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
