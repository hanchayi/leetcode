/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
  if (x === 0 ) {
    return 0
  }
  // function newton(x, n) {
  //   // x^2 - n = 0
  //   const y = x - ( x * x - n) / (2 * x)
  //   if (x.toFixed(5) === y.toFixed(5)) {
  //     return x
  //   }
  //   return newton(y, n)
  // }
  // return Math.floor(newton(x/2 , x))


  function binary(x: number): number {
    let start = 1
    let end = x

    while(end >= start) {
      let mid = Math.floor((end + start) / 2);
      console.log(start, mid, end)
      let mid2 = mid * mid
      if (mid2 === x) {
        return mid
      } else if (mid2 > x) {
        if ((mid - 1)*(mid - 1) < x) {
          return mid - 1
        }
        end = mid - 1
      } else {
        if ((mid + 1)*(mid + 1) > x) {
          return mid
        }
        start = mid + 1
      }
    }
    return 0
  }
  return binary(x)
};
// @lc code=end

