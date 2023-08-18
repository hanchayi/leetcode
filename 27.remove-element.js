/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  /**
   * left right
   * left = val
   * right -> right != val
   * 1
   *  */
  let left = 0
  let right = nums.length - 1

  while(left <= right) {
    if (nums[left] !== val) {
      left++
      continue
    }


    while(nums[right] && nums[right] === val) {
      right--
    }

    if (right > left) {
      let tmp = nums[right]
      nums[right] = nums[left]
      nums[left] = tmp
    }
  }

  return {
    count: left,
    nums
  }
};

console.log(removeElement([], 1))
console.log(removeElement([1], 2))
console.log(removeElement([3, 2, 2, 3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))
// @lc code=end

