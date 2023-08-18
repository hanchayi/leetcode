/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
var inorderTraversal = function(root) {
    let output = []
    function traverse(node) {
      if (!node) {
        return
      }
      if (node.left) {
        traverse(node.left)
      }
      output.push(node.val)
      if (node.right) {
        traverse(node.right)
      }
    }
    traverse(root)
    console.log(output)
    return output
};
// @lc code=end

