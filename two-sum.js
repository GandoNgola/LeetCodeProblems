// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// * @param {number[]} nums
// * @param {number} target
// * @return {number[]}

// Using ES6 Map() => Runtime 72ms
const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i];
    if (map.has(key)) {
      return [map.get(key), i]
    }
    map.set(nums[i], i);
  }
}

// Using normal object => Runtime 76ms
const twoSum = (nums, target) => {
  const map = {};
  
  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i];
    if (key in map) {
      return [map[key], i]
    }
    map[nums[i]] = i;
  }
}