/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let i = 0
  let j = s.length - 1

  while(true) {
    if (i >= j) {
      break
    }



    if (ignore(s[i])) {
      i++
      continue
    }

    if (ignore(s[j])) {
      j--
      continue
    }

    if (s[i].toLocaleLowerCase() !== s[j].toLocaleLowerCase()) {
      return false
    }

    i++
    j--
  }

  return true
};

function ignore(c) {
  return c === ' ' || c === ', '
}
// @lc code=end

