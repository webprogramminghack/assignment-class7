const arrayOfObjects = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
];

const result = findItems(arrayOfObjects, function (item) {
  return item.id < 3;
});

//**Create the `findItems` Function:**
function findItems(array, callback) {
  const result = [];

  //The `findItems` function should iterate over the `array` and apply the `callback` function to each element.
  for (let i = 0; i < array.length; i++) {
    //It should return a new array containing all elements for which the `callback` returns `true`.
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }

  console.log(result);
}
