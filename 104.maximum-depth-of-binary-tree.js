/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * @return {number}
 */
var maxDepth = function(root) {
  let max = 0
  function reverse(node, depth = 0) {
    if (!node) {
      return
    }
    depth++
    if (depth > max) {
      max = depth
    }
    if (node.left) {
      reverse(node.left, depth)
    }

    if (node.right) {
      reverse(node.right, depth)
    }
  }
  reverse(root)
  return max
};
// @lc code=end

