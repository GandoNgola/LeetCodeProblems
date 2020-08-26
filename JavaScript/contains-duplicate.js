// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:
// Input: [1,2,3,1]
// Output: true

// Example 2:
// Input: [1,2,3,4]
// Output: false

// Example 3:
// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

// One liner using Set(), as it creates an object with unique values
const containsDuplicate = nums => {
  return new Set(nums).size < nums.length;
}

// Using Map()
const containsDuplicate = nums => {
  const map = new Map();
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (map.has(nums[i])) {
      return true;
    } else {
      map.set(nums[i], i);
    }
  }
  return false;
}