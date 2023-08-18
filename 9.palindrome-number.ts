/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  const str = x.toString();
  if (str.length === 0) {
    return true
  }

  // 0
  // 0 1
  // 0 1 2
  // 0 1 2 3

  for(let i = 0; i < (str.length - 1) / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }

  return true
};
// @lc code=end

