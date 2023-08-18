/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
 * 1 2 3 4
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1

    while(left <= right) {
      let middle = Math.floor((left + right) / 2);

      console.log(middle)
      if (nums[middle] === target) {
        return middle
      }

      if (nums[middle] < target) {
        left = middle + 1
      } else {
        right = middle - 1
      }
    }

    return -1
};
// @lc code=end


console.log('res', search([-1,0,3,5,9,12], 9))
