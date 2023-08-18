/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let index = 0;

  while(true) {
    let num = nums[index]
    if (!num) {
      break
    }

    console.log(num, val)

    if (num === val) {
      nums.splice(index, 1)
    } else {
      index++
    }
  }

  return index
};
// @lc code=end

