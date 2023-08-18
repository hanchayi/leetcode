/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// asdsa

/**
 * 1
 * 0  1
 *    0  1
 *       0   1
 *           0   1
 */

var longestPalindrome = function(s) {
  let max = 1
  let str = ''
  let state = {}
  // s[i][j] =  s[i+1][j-1] && s[i]=s[j]
  for (let i = 0; i < s.length; i++) {
    if (!state[i]) {
      state[i] = {}
    }

    state[i][i] = 1
    console.log(`state(${i}, ${i}) = 1`)
    if (i+1 < s.length) {
      if (s[i] === s[i + 1]) {
        state[i][i+1] = 2
        max = 2
        console.log('max', i, i+1)
        str = s.slice(i, i + 2)
      } else {
        state[i][i+1] = 0
      }
      console.log(`state(${i}, ${i+1}) = ${state[i][i+1]}`)
    }
  }

  for (let i = 0; i < s.length; i++) {
    let x = i
    let y = i

    while(true) {
      x = x - 1
      y = y + 1

      if (y >= s.length || x < 0) {
        break
      }

      state[x][y] = s[x] === s[y] && state[x + 1][y - 1] ? state[x + 1][y - 1] + 1 : 0
      console.log(`state(${x}, ${y}) = ${state[x][y]}`)
      if (state[x][y] > max) {
        console.log('max', x, y)
        max = state[x][y]
        str = s.slice(x, y + 1)
      }

      if (y + 1 < s.length) {
        state[x][y + 1] = s[x] === s[y + 1] && state[x + 1][y] ? state[x + 1][y] + 1 : 0
        console.log(`state(${x}, ${y + 1}) = ${state[x][y + 1]}`)
        if (state[x][y + 1] > max) {
          console.log('max', x, y)
          max = state[x][y + 1]
          str = s.slice(x, y + 2)
        }
      }
    }

  }

  return str
};
// @lc code=end

const res = longestPalindrome("cbbd")
console.log(res)
