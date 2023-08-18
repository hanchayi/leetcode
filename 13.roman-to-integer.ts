/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  const configs = {
    I: {
      value: 1,
      substractions: [ 'V', 'X' ]
    },
    V : {
      value: 5,
    },
    X: {
      value: 10,
      substractions: [ 'L', 'C' ]
    },
    L: {
      value: 50,
    },
    C: {
      value: 100,
      substractions: [ 'D', 'M' ]
    },
    D: {
      value: 500,
    },
    M: {
      value: 1000,
    },
  }

  let total = 0
  let index = 0
  const chars = s.split('')

  while(true) {
    const curLetter = chars[index];
    if (!curLetter) {
      break;
    }

    let curNum= configs[curLetter]
    let nextLetter = chars[index + 1]

    let nextNum
    if (nextLetter) {
      nextNum = configs[nextLetter]
    }

    // 下一个数字是否比当前数字大
    if (nextNum && nextNum.value > curNum.value) {
       // 校验规则
       if (!curNum.substractions) {
        throw new Error(`${curLetter} has no substractions`)
       }

       if (!curNum.substractions.includes(nextLetter)) {
        throw new Error(`${curLetter} can't be substracted by ${nextLetter}`)
       }
      total += (nextNum.value - curNum.value)


      index+=2
    } else {
      total += curNum.value
      index++
    }
  }

  return total
};
// @lc code=end

