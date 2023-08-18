/*
 * @lc app=leetcode id=129 lang=typescript
 *
 * [129] Sum Root to Leaf Numbers
 */

// @lc code=start
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

function sumNumbers(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  let total = 0
  function dfs(root: TreeNode, path: string) {
    path += root.val
     if (root.left) {
      dfs(root.left, path)
     }

     if (root.right) {
      dfs(root.right, path)
     }

     if (!root.left && !root.right) {
      total += Number(path)
     }
  }

  dfs(root, '')
  return total
};
// @lc code=end

