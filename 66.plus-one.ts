/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  let index = digits.length - 1;

  while(true) {
    if (index === -1) {
      digits.unshift(1)
      break
    }
    digits[index] = digits[index] + 1

    if (digits[index] === 10) {
      digits[index] = 0
      index--
    } else {
      break
    }
  }

  return digits
};
// @lc code=end

