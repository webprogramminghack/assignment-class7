// Read the README.md file first

// start coding here
// --------
const counter = {
  total: 0,

  increment() {
    this.total += 1;
    return this;
  },

  decrement() {
    this.total -= 1;
    return this;
  },

  reset() {
    this.total = 0;
    return this;
  },

  showCount() {
    console.log(this.total);
    return this;
  }
};
// --------
// the end of your code
counter.increment().increment().decrement().showCount().reset().showCount();
