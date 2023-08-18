/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
var postorderTraversal = function(root) {
  let nodes = []
  function recursion(node) {
    if (node.left) {
      recursion(node.left)
    }

    if (node.right) {
      recursion(node.right)
    }

    nodes.push(node.value)
  }
  recursion(root)
  return nodes
};
// @lc code=end

