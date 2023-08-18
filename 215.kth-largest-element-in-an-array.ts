/*
 * @lc app=leetcode id=215 lang=typescript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start

class Heap {
  nums: number[] = []

  constructor(nums) {
    this.nums = nums
    this.init()
  }

  public init() {
    for (let i = Math.floor((this.nums.length - 1 - 1 ) / 2); i >=0; i --) {
      this.heapify(i);
    }
  }

  public add(num) {
    this.nums.unshift(num)
    if ( this.nums.length > 1) {
      this.heapify(0)
    }
  }

  public heapify(i: number) {
    let parent = i
    let lson = 2 * i + 1
    let rson = 2 * i + 2

    if (lson < this.nums.length && this.nums[parent] > this.nums[lson]) {
      parent = lson
    }

    if (rson < this.nums.length && this.nums[parent] > this.nums[rson]) {
      parent = rson
    }

    if (parent !== i) {
      this.swap(parent, i)
      this.heapify(parent)
    }
  }

  public seek(i) {
    return this.nums[i - 1]
  }

  public size() {
    return this.nums.length
  }

  public poll() {
    this.nums[0] = this.nums[this.nums.length - 1]
    this.nums.splice(this.nums.length - 1, 1)
    this.heapify(0)
  }

  public swap(i, j) {
    let tmp = this.nums[i]
    this.nums[i] = this.nums[j]
    this.nums[j] = tmp
  }
}


function findKthLargest(nums: number[], k: number): number {
  const heap = new Heap([]);
  for(const num of nums) {
    heap.add(num)
    console.log(heap.nums)
    if (heap.size() > k) {
      heap.poll()
      console.log(heap.nums)
    }
  }
  return heap.nums[0]
};
// @lc code=end
