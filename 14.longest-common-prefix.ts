/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let longest = ""
  let index = 0
  while(true) {
    let same = true
    let cur
    for(const str of strs) {
      if (typeof str[index] === 'undefined') {
        same = false
        break
      }

      if (typeof cur === 'undefined') {
        cur = str[index]
        continue
      }

      if (str[index] !== cur) {
        same = false
        break
      }
    }

    if (same) {
      longest += cur
      index++
    } else {
      break
    }

  }
  return longest
};
// @lc code=end

