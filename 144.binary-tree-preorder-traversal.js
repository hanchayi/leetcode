/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let nodes = []
  function recursion(node) {
    nodes.push(node.value)
    if (node.left) {
      recursion(node.left)
    }

    if (node.right) {
      recursion(node.right)
    }
  }
  recursion(root)
  return nodes
};
// @lc code=end

