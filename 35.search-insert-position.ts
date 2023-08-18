/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;
  let mid = 0;

  while(start <= end) {
    mid = Math.floor((end +  start) / 2);
    let midNum = nums[mid]

    console.log(midNum, mid)
    if (midNum === target) {
      return mid
    } else if (midNum > target) {
      let former = mid > 0 ? nums[mid-1] : Number.MIN_VALUE
      if (former < target) {
        return mid
      } else {
        end = mid - 1
      }
    } else {
      let latter = mid === nums.length - 1 ? Number.MAX_VALUE : nums[mid + 1]
      if (latter > target) {
        return mid + 1
      } else {
        start = mid + 1
      }

    }
  }

  return 0
};
// @lc code=end

