/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function fromArray(items) {
  let pre
  for(let i = items.length - 1; i >= 0; i--) {
    pre = new ListNode(items[i], pre)
  }

  return pre
}

function toArray(node) {
  let items = []
  while(node) {
    items.push(node.val)
    node = node.next
  }
  return items
}

var removeElements = function(head, val) {
  let node = head
  let pre = null
  while(node) {
    if (node.val === val) {
      if (pre) {
        pre.next = node.next
      } else {
        head = node.next
      }
    } else {
      // 被移除的不能作为pre
      pre = node
    }

    node = node.next
  }
  return head
};
// @lc code=end
console.log(removeElements(
  new ListNode(7, new ListNode(7, new ListNode(7))),
  7
))
console.log(toArray(removeElements(
  fromArray([1,2,6,3,4,5,6]),
  6
)))

