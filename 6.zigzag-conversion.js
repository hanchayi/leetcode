/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let points = {}
    /**
     *
     */
    const chars = s.split('')
    let index = 0

    let x = 0
    let y = 0
    let isTopToBottom = true

    while (true) {
      const char = chars[index]

      if (!chars[index]) {
        break
      }

      if (!points[x]) {
        points[x] = {}
      }

      points[x][y] = char
      console.log(x, y, char)

      if (isTopToBottom) {
        y++
      } else {
        y--
        x++
      }


      if (y === numRows) {
        isTopToBottom = false
        y = numRows - 2
        x++
      }

      if (y === 0) {
        isTopToBottom = true
      }



      index++
    }

    console.log(points)
    let output = ''
    for(let j =0 ; j < numRows;j++) {
      if (j !== 0) {
        output += '\n'
      }
      for(let i =0 ; i <= x;i++) {
        if (points[i] && points[i][j]) {
          output += points[i][j]
        } else {
          output += ' '
        }
      }
    }

    console.log(output)

};
// @lc code=end

convert("PAYPALISHIRING", 3)
