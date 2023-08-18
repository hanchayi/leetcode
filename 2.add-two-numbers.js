/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (!l1 || !l2) {
    throw new Error('invalid input')
  }

  let node1 = l1
  let node2 = l2
  let head
  let last
  let carry = 0

  while(true) {
    if (!node1 && !node2 && !carry) {
      break
    }

    let node = new ListNode()
    if (!last) {
      head = node
    } else {
      last.next = node
    }
    last = node

    let val1 = node1 ? node1.val : 0
    let val2 = node2 ? node2.val : 0
    let val = val1 + val2 + carry
    node.val =  val % 10
    carry = Math.floor(val / 10)

    node1 = node1 && node1.next
    node2 = node2 && node2.next
  }

  return head
};
// @lc code=end

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const res = addTwoNumbers(
  new ListNode(2, new ListNode(4)),
  new ListNode(5, new ListNode(6))
)

let next = res
while(next) {
  console.log(next.val)
  next = next.next
}
