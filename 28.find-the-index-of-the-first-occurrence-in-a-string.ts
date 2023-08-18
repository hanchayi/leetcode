/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  let i = 0;
  while( true) {
    if (i === haystack.length) {
      break
    }
    let match = true
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        match = false
      }
    }

    if (match) {
      return i
    }
    i++
  }
  return -1
};
// @lc code=end

