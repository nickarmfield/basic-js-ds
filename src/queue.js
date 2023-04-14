const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  HEAD = null;
  getUnderlyingList() {
    return this.HEAD
  }

  enqueue(value) {
    if (this.HEAD) {
      let curr = this.HEAD
      while (curr.next) {
        curr = curr.next
      }
      curr.next = new ListNode(value)
    } else {
      this.HEAD = new ListNode(value)
    }
  }

  dequeue() {
    if (this.HEAD) {
      const curr = this.HEAD
      this.HEAD = this.HEAD.next
      return curr.value
    }
  }
}

module.exports = {
  Queue
};
