/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const digits = (x + '').split('')
    let reversed
    if (digits[0] === '-') {
      reversed = [
        '-',
        ...digits.slice(1)
      ]
    } else {
      reversed = digits.reverse()
    }

    return Number(reversed.join(''))
};
// @lc code=end

const res = reverse(120)
console.log(res)
