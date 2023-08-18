/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  let i = a.length - 1
  let j = b.length - 1

  let res = ''
  let carry = 0

  while(true) {
    let letter1 = a[i]
    let letter2 = b[j]
    if (!letter1 && !letter2) {
      if (!carry) {
        break
      }
    }

    let num1 = typeof letter1 !== 'undefined' ? Number(letter1) : 0
    let num2 = typeof letter2 !== 'undefined' ? Number(letter2) : 0
    let total = num1 + num2 + carry

    const num = total % 2
    if (total > 1) {
      carry = 1
    } else {
      carry = 0
    }

    res = num + res
    i--
    j--
  }

  return res
};
// @lc code=end

