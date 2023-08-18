/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
var minDepth = function(root) {
  let min = Number.MAX_VALUE;
  function recursion(node, depth = 0) {
    depth++
    if (!node.left && !node.right) {
      min = Math.min(min, depth)
    }

    if (node.left) {
      recursion(node.left)
    }
    if (node.right) {
      recursion(node.right)
    }
  }
  recursion(root)
  return min
};
// @lc code=end

