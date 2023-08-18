/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let index = 0
  let cur
  let pre
  while(true) {
    if (index === 0) {
      cur = [ 1 ]
    } else {
      cur = [ 1, ...pre.reduce((preVal, curVal, idx) => {
        let next = pre[idx + 1];

        if (next) {
          preVal.push(next + curVal)
        }
        return preVal
      }, []),1]
    }

    if (index === rowIndex) {
      break
    }

    pre = cur
    index++
  }
  return cur
};
// @lc code=end

