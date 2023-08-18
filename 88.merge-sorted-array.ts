/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let start1 = m - 1
  let start2 = n - 1

  while(start1 >= 0 || start2 >= 0) {
    let num1 = nums1[start1]
    let num2 = nums2[start2]
    if (num1 > num2 || start2 === -1) {
      nums1[start1 + start2 + 1] = num1
      start1--
    } else {
      nums1[start1 + start2 + 1] = num2
      start2--
    }
  }
};

// @lc code=end

