/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buy = prices[0];
  let max = 0

  for (let i = 1; i< prices.length; i++) {
    // 更低的价格
    if (prices[i] <  buy) {
      buy = prices[i]
    }

    // more profit
    if (prices[i] - buy > max) {
      max = prices[0] - buy
    }
  }
  return max
};
// @lc code=end

