/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start

var MyQueue = function() {
    this.stack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  let stack = []
  while(this.stack.length !== 1) {
    stack.push(this.stack.pop())
  }
  let last = this.stack.pop()
  this.stack = stack;
  return last
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.stack[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  this.stack = []
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end


var queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek());  // 返回 1
console.log(queue.pop());   // 返回 1
queue.empty(); // 返回 false
