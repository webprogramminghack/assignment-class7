// Read the README.md file first

// start coding here
// --------

const Counter = {
  count: 0,
  increment: function () {
    this.count++;
    return this;
  },
  decrement: function () {
    this.count--;
    return this;
  },
  reset: function () {
    this.count = 0;
    return this;
  },
  showCount: function () {
    console.log('Count:' + this.count);
    return this;
  },
};
//function Counter() {
// this.count = 0;
//}
//Counter.increment = function () {
//this.count++;
// return this;
//};
//Counter.decrement = function () {
// this.count--;
//return this;
//};
//Counter.reset = function () {
//this.count = 0;
//return this;
//};
//Counter.showCount = function () {
//console.log('Jumlah saat ini :'+this.count);

//return this;
//};

//const myCounter = new Counter();
// --------
// the end of your code

Counter.increment().increment().decrement().showCount().reset().showCount();
//Counter.increment().showCount();
//Counter.decrement().showCount();
