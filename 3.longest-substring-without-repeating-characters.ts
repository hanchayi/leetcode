/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0 || s.length === 1) {
    return s.length
  }

  let num = 1
  let slow = 0
  let fast = 1

  let str = s[0]
  while(fast < s.length) {
    let letter = s[fast]

    if (str.includes(letter)) {
      // slow move
      slow++
      str = str.slice(1)
    } else {
      fast++
      // fast move
      str += letter;
      if (str.length > num) {
        num = str.length;
      }
    }
  }

  return num;
};
// function lengthOfLongestSubstring(s: string): number {
//   let num = 0
//   for (let i = 0; i < s.length; i++) {
//     let letter = s[i]
//     let letters = letter;
//     for(let j = i + 1; j < s.length; j++) {
//       let cur = s[j];
//       if (letters.includes(cur)) {
//         break
//       }
//       letters += cur
//     }

//     if (letters.length > num) {
//       num = letters.length
//     }
//   }
//   return num;
// };

// function lengthOfLongestSubstring(s: string): number {
//   let num = 0
//   let j = 1;
//   let letters
//   for (let i = 0; i < s.length; i++) {
//     j = j - 1 > i + 1 ? j - 1 : i + 1
//     letters = s.slice(i, j)
//     for(; j < s.length; j++) {
//       let cur = s[j];
//       if (letters.includes(cur)) {
//         break
//       }
//       letters += cur
//     }

//     if (letters.length > num) {
//       num = letters.length
//     }
//   }
//   return num;
// };
// @lc code=end

