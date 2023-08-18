/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let rows = []
  let num = 0
  let pre

  while(true) {
    if (num === numRows) {
      break
    }

    let cur
    if (!pre) {
      cur = [1]
    } else {
      cur = [ 1, ...pre.reduce((preVal, curVal, index) => {
        let next = pre[index + 1]
        if (next) {
          preVal.push(curVal + next)
        }
        return preVal
      }, []), 1]
    }

    rows.push(cur)
    pre = cur

    num++
  }
  return rows;
};
// @lc code=end

