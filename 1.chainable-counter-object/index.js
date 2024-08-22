// Read the README.md file first

// start coding here
// --------

const counter = {
  count: 0,

  increment() {
    this.count++;
    return this; 
  },

  decrement() {
    this.count--;
    return this;
  },

  reset() {
    this.count = 0;
    return this; 
  },

  showCount() {
    console.log(this.count);
    return this;
  }
};

// --------
// the end of your code
counter.increment().increment().decrement().showCount().reset().showCount();
