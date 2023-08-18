/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  let min = Number.MAX_VALUE
  let max = 0
  function recursion(node, depth = 0) {
    depth++

    if (!node.left && !node.right) {
      min = Math.min(min, depth)
      max = Math.max(max, depth)
    }

    if (node.left) {
      recursion(node.right, depth)
    }

    if (node.right) {
      recursion(node.right, depth)
    }
  }
  recursion(root)
  console.log(max, min)
  return max - min > 1
};
// @lc code=end

