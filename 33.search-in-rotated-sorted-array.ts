/*
 * @lc app=leetcode id=33 lang=typescript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let start = 0
  let end = nums.length - 1;
  let mid = 0

  while( start <= end ) {
    mid = Math.floor((end + start) / 2)
    let midNum = nums[mid]
    console.log('index', start, mid, end)
    if (target === midNum) {
      return mid
    }
    let startNum = nums[start]
    let endNum = nums[end]

    if (midNum > target) {
      if (startNum <= target) {
        end = mid
      } else {
        if (start === mid) {
          start = end
        } else {
          start = mid
        }
      }
    } else {
      if (target <= endNum) {
        if (start === mid) {
          start = end
        } else {
          start = mid
        }
      } else {
        end = mid
      }
    }
    console.log('index2', start, mid, end)
  }

  if (start === end && nums[start] === target) {
    return start
  }

  return -1
};
// @lc code=end

