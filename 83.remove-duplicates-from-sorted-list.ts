/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
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

// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let values: number[] = [];

  if (!head) {
    return head
  }

  let pre: ListNode | null = null
  let cur = head

  while(true) {
    if (!cur) {
      break;
    }

    if (values.includes(cur.val)) {
      // delete duplicates
      if (pre !== null) {
        pre.next = cur.next
      }
    } else {
      values.push(cur.val)
    }

    pre = cur
    head = cur.next
  }

  return head
};
// @lc code=end

