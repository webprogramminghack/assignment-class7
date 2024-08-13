# Implementing a Custom `findItems` Function with Callbacks

## Objective

Create a custom `findItems` function that takes an array and a callback function as arguments. The callback function will determine whether an item in the array matches a certain condition. The `findItems` function should return a new array containing all items that match the condition.

## Instructions

1. **Create the `findItems` Function:**

   - Implement a function called `findItems` that accepts two parameters:
     - `array`: An array of items to be searched.
     - `callback`: A function that will be called on each element of the array. The `callback` function should accept one argument (the current item) and return `true` if the item matches the condition or `false` otherwise.

2. **Expected Behavior:**

   - The `findItems` function should iterate over the `array` and apply the `callback` function to each element.
   - It should return a new array containing all elements for which the `callback` returns `true`.
   - If no element matches the condition, the `findItems` function should return an empty array.

3. **Test Cases:**
   - You will be provided with specific arrays and conditions that the `findItems` function should handle.
   - Implement the function so that it passes all test cases.

## Example Test Cases

### Example 1: Find Objects with `id` Less Than 3

```javascript
const arrayOfObjects = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' }
];

const result = findItems(arrayOfObjects, function(item) {
  return item.id < 3;
});

console.log(result);

Expected output: [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ]
```
