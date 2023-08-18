/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//   let num
//   for (let i = 0; i < nums.length; i++) {
//     num ^= nums[i]
//   }
//   return num
// };

var singleNumber = function(nums) {
  let set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i])
    } else {
      set.add(nums[i])
    }
  }
  return [...set][0]
};
// @lc code=end

