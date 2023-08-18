/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
interface Config {
  left: string;
  right: string;
}
function isValid(s: string): boolean {
  const chars: string[] = []
  const configs: Config[] = [
    { left: '(' , right: ')' },
    { left: '[' , right: ']' },
    { left: '{' , right: '}' },
  ]

  for(let i = 0; i < s.length; i++) {
    const char = s[i];
    const config = configs.find(cfg => cfg.left === char || cfg.right === char)
    if (!config) {
      throw new Error('no config found')
    }

    if (config.left === char) {
      chars.push(char)
    } else {
      if (chars.pop() !== config.left) {
        return false
      }
    }
  }

  if (chars.length > 0) {
    return false
  }

  return true
};
// @lc code=end

