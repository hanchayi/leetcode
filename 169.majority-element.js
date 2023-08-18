/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//   // nums遍历数量放到一个map中去计数，如果某个大于n/2则跳出循环
//   // 时间复杂度On 空间复杂度On
//   const numsCountMap = {};
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];

//     if (!numsCountMap[num]) {
//       numsCountMap[num] = 0;
//     }

//     numsCountMap[num]++;

//     if (numsCountMap[num] > nums.length / 2) {
// 	    return num;
//     }
//   }

//   throw new Error("no num found");
// };


// Moore majority vote algorithmn
// https://zh.wikipedia.org/wiki/%E5%A4%9A%E6%95%B0%E6%8A%95%E7%A5%A8%E7%AE%97%E6%B3%95
var majorityElement = function(nums) {
  let max
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      max = nums[i]
      count = 1
    } else if (nums[i] === max) {
      count++
    } else {
      count--
    }
  }
  return max
};

console.assert(majorityElement([1, 3, 3]) === 3, 'case1')
console.assert(majorityElement([2, 1, 2, 2]) === 2, 'case2')
console.assert(majorityElement([1]) === 1, 'case3')
// @lc code=end

