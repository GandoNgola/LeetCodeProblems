// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:
// Input: [3,2,3]
// Output: 3

// Example 2:
// Input: [2,2,1,1,1,2,2]
// Output: 2

// IMPORTANT: Many solutions in leetcode assumes there are only 2 values in an array, which then of
// course would be simpler to sort and return the biggest values like Math.floor(nums.length/2). But
// this doesn't work if there are more than 2 values. That's why I opted for the below.


//Runtime 76ms, better than 83.89% of solutions. Big O notation is of O(n);
const majorityElement = nums => {
  if (nums <= 1) {
    return nums;
  }

  let obj = {};

  nums.forEach(num => {
    if (num in obj) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  });

  return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}