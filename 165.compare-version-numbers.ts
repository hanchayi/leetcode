/*
 * @lc app=leetcode id=165 lang=typescript
 *
 * [165] Compare Version Numbers
 */

// @lc code=start
function compareVersion(version1: string, version2: string): number {
  let num1s = version1.split('.')
  let num2s = version2.split('.')

  let length = Math.max(num1s.length, num2s.length)

  for(let i = 0; i < length; i++) {
    let num1 = Number(num1s[i]) || 0
    let num2 = Number(num2s[i]) || 0

    if (num1 > num2) {
      return 1
    }

    if (num1 < num2) {
      return -1
    }
  }

  return 0
};
// @lc code=end

