/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  let length = 0;
  let index = s.length - 1;

  while(true) {
    let letter = s[index]
    if (typeof letter === 'undefined') {
      break;
    }

    if (letter === ' ') {
      if (length !== 0) {
        break
      }
    } else {
      length++
    }

    index--
  }

  return length
};
// @lc code=end

