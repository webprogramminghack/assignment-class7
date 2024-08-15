// Read the README.md file first

// start coding here
// --------
const counter = {
  count: null,
  increment: function () {
    this.count++;
    return {
      ...this,
      increment: this.increment,
    }
  },
  decrement: function () {
    this.count--;
    return {
      ...this,
      decrement: this.decrement,
    }
  },
  showCount: function () {
    console.log(`${this.count}`);
    return {
      ...this,
      showCount: this.showCount
    }
  },
  reset: function () {
    this.count = 0;
    return {
      ...this,
      reset: this.reset
    }
  },
};
// --------
// the end of your code
counter.increment().increment().decrement().showCount().reset().showCount();
