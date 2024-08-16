// Read the README.md file first

// start coding here
// --------
//1. Create the `counter` Object
{
  let counter = {
    //A property that holds the current count (initialize it to 0).
    count: 0,
    //A method that increments the `count` by 1.
    increment() {
      this.count++;
    },
    //A method that decrements the `count` by 1.
    decrement() {
      this.count--;
    },
    //A method that resets the `count` to 0.
    reset() {
      this.count = 0;
    },
    //A method that displays the current count
    showCount() {
      console.log(this.count);
    },
  };

  counter.increment();
  counter.decrement();
  counter.reset();
  //counter.showCount();
}

//2. Modify the Methods for Chaining
{
  let counter = {
    //A property that holds the current count (initialize it to 0).
    count: 0,
    //A method that increments the `count` by 1.
    increment() {
      this.count++;
      return this;
    },
    //A method that decrements the `count` by 1.
    decrement() {
      this.count--;
      return this;
    },
    //A method that resets the `count` to 0.
    reset() {
      this.count = 0;
      return this;
    },
    //A method that displays the current count
    showCount() {
      console.log(this.count);
      return this;
    },
  };

  // counter.increment();
  // counter.decrement();
  // counter.reset();
  // counter.showCount();

  counter.increment().increment().decrement().showCount().reset().showCount();
}

// --------
// the end of your code
