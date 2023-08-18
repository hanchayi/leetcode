/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

//  class ListNode {
//      val: number
//      next: ListNode | null
//      constructor(val?: number, next?: ListNode | null) {
//          this.val = (val===undefined ? 0 : val)
//          this.next = (next===undefined ? null : next)
//      }
//  }

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list2) {
    return list1
  }

  if (!list1) {
    return list2
  }

  let output
  let node1 = list1
  let node2 = list2
  let last

  while(true) {
    if (!node1 && !node2) {
      break
    }

    let node
    if (node1.val < node2.val || !node2) {
      node = node1
      node1 = node.next
    } else {
      node = node2
      node2 = node.next
    }

    if (!output) {
      output = node
    }

    if (!last) {
      last = node
    } else {
      last.next = node
    }
  }
  return output
};
// @lc code=end

