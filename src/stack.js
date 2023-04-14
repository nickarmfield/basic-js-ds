const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  HEAD = null;
  push(element) {
    this.HEAD = {value: element, next: this.HEAD}
  }

  pop() {
    let value = this.HEAD.value
    this.HEAD = this.HEAD.next
    return value
  }

  peek() {
    if (this.HEAD) {
      return this.HEAD.value
    }
  }
}

module.exports = {
  Stack
};
