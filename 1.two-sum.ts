/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = {}

  for(let i = 0; i < nums.length; i++) {
    const num = nums[i]

    if (map.hasOwnProperty(target - num)) {
      return [i, map[target - num]]
    }
    map[num] = i
  }

  return []
};
// @lc code=end

