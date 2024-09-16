// Read the README.md file first

// start coding here
// --------
const counter = { 
  count: 0, 
  
  increment() {
    this.count += 1;
    return this;
  },

  decrement() {
    this.count -= 1;
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
