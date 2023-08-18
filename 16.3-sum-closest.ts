/*
 * @lc app=leetcode id=16 lang=typescript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
// function threeSumClosest(nums: number[], target: number): number {
//   if (nums.length < 2) {
//     throw new Error('invalid length')
//   }

//   let res = 0
//   let lastDelta = Number.MAX_VALUE;

//   for(let i = 0; i < nums.length - 2; i++) {
//     for(let j = i+1; j < nums.length - 1; j++) {
//       for(let z= j+1; z < nums.length; z++) {
//         let sum = nums[i] + nums[j] + nums[z];
//         let delta = sum - target;
//         if (Math.abs(lastDelta) > Math.abs(delta)) {
//           res = sum
//           lastDelta = delta
//         }
//       }
//     }
//   }

//   return res;
// };

function threeSumClosest(nums: number[], target: number): number {
  if (nums.length < 2) {
    throw new Error('invalid length')
  }

  nums.sort((a, b) => a - b)
  let res = 0
  let lastDelta = Number.MAX_VALUE;

  for(let i = 0; i < nums.length - 2; i++) {
    for(let j = i+1; j < nums.length - 1; j++) {
      for(let z= j+1; z < nums.length; z++) {
        let sum = nums[i] + nums[j] + nums[z];
        let delta = sum - target;
        if (Math.abs(lastDelta) > Math.abs(delta)) {
          res = sum
          lastDelta = delta
        }
      }
    }
  }

  return res;
};

// @lc code=end

