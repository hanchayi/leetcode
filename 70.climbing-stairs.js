/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// 1 => 1                    1
// 2 => 2 11                 2
// 3 => 111 12 21            3
// 4 => 1111 112 121 211 22  5
// 默认递归 O(2^n) 带缓存 O(n)
// var climbStairs = function(n) {
//   let cache = {}

//   if (cache[n]) {
//     return cache[n]
//   }

//   function _climbStairs(n) {
//    // f_n = f_n-2 + 1 + 1 + f_n-1 + 1
//    if (n <= 3) {
//     return n
//    }

//    return climbStairs(n - 1)  + climbStairs(n - 2)
//   }

//   let res = _climbStairs(n)
//   cache[n] = res
//   return res
// };


// dynamic program
// https://juejin.cn/post/6951922898638471181
// f1 = 1                            1
// f2 = 1 + 1 / 2                    2
// f3 = 1 + 2 / 1 + 1 + 1 / 2 + 1    3
// f4 = 1+1+1+1 / 1+ 1 + 2/ 1+2+1 / 2+2/ 2+1+1  5
// f_x =  f_x-1 + f_x-2
function climbStairs(n) {
  if (n <= 2) {
    return n
  }
  let lastTwo = 1
  let lastOne = 2
  let i = 2
  let res
  while(++i <= n) {
    res = lastOne + lastTwo
    lastTwo = lastOne
    lastTwo = res
  }
  return res
}

// @lc code=end

console.assert(climbStairs(2) == 2)
console.assert(climbStairs(4) == 5)
