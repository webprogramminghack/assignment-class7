// Read the README.md file first

// start coding here
// --------

function Counter() {
    this.counter = 0;
}

Counter.prototype.increment = function () {
    this.counter++;
    return this;
}
Counter.prototype.decrement = function () {
    this.counter--;
    return this;
}
Counter.prototype.showCount = function () {
    console.log(this.counter);
    return this;
}
Counter.prototype.reset = function () {
    this.counter = 0;
    return this;
}

const counter = new Counter();
// --------
// the end of your code

counter.increment().increment().decrement().showCount().reset().showCount();
