/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function(root) {
  if (!root) {
    return true
  }
  return isSame(root.left, root.right)
};

function isSame(left, right) {
  if (!left && !right) {
    return true
  }

  if (!left && right) {
    return false
  }

  if (!right && left) {
    return false
  }

  // console.log(JSON.stringify(left), JSON.stringify(right))
  return left.value === right.value && isSame(left.left, right.right) && isSame(left.right, right.left)
}
// @lc code=end

