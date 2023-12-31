/*
 * @lc app=leetcode id=112 lang=typescript
 *
 * [112] Path Sum
 */

// @lc code=start
//Definition for a binary tree node.
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false
  }

  let res = false
  function dfs(root: TreeNode, total: number = 0) {
    total += root.val

    if (root.left) {
      dfs(root.left, total)
    }

    if (root.right) {
      dfs(root.right, total)
    }

    if (!root.left && !root.right && total === targetSum) {
      res = true
    }
  }

  dfs(root)

  return res
};
// @lc code=end

