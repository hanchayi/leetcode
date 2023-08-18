/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
  if (n <= 2) {
    return n
  }

  return climbStairs(n - 1) + climbStairs(n - 2)
};
// @lc code=end

