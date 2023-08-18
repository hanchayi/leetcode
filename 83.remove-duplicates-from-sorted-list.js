/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let cur = head
  while(true) {
    if (!cur) {
      break
    }

    let next = cur.next

    while(next && next.val === cur.val) {
      // delete next
      cur.next = next.next
      next = next.next
    }
    cur = next
  }

  return head
};
// @lc code=end

