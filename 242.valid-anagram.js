/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length != t.length) {
    return false
  }

  let map = {}
  function put(char, isAdd = true) {
    if (!map[char]) {
      map[char] = 0
    }

    if (isAdd) {
      map[char]++
    } else {
      map[char]--
    }
  }

  // 遍历字符算出现次数 再对比字母次数是否一致
  // On 时间复杂 On的空间复杂
  for (let i = 0 ; i < s.length; i++) {
    put(s[i])
    put(s[i], false)
  }

  Object.keys(map).forEach(key => {
    if (map[key] !== 0) {
      return false
    }
  })
  return true
};
// @lc code=end

console.assert(isAnagram("anagram", "nagaram") === true, 'case1')
console.assert(isAnagram("rat", "car") === true, 'case2')
