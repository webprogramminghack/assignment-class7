# Chainable Counter Object

## Objective

Create a `counter` object that keeps track of a count and allows you to increment, decrement, reset, and display the count. Modify the object methods to make them chainable, allowing multiple method calls in sequence.

## Instructions

### 1. Create the `counter` Object

Create an object called `counter` with the following properties and methods:

- **count**: A property that holds the current count (initialize it to 0).

- **increment**: A method that increments the `count` by 1.

- **decrement**: A method that decrements the `count` by 1.

- **reset**: A method that resets the `count` to 0.

- **showCount**: A method that displays the current count using `console.log`.

### 2. Modify the Methods for Chaining

Modify the methods `increment`, `decrement`, `reset`, and `showCount` so they can be chained together. For example:

```javascript
counter.increment().increment().decrement().showCount().reset().showCount();
```

The above code should display:

```
1
0
```
