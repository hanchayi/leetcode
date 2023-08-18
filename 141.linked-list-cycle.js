/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let nodes = new Set();

  let next = head
  while(next) {
    if (nodes.has(next)) {
      return true
    } else {
      nodes.add(next)
    }
    next = next.next
  }

  return false
};
// @lc code=end

