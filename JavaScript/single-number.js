// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:
// Input: [2,2,1]
// Output: 1

// Example 2:
// Input: [4,1,2,1,2]
// Output: 4

// Using ES6 Map()
const singleNumber = nums => {
  const map = new Map();
  const length = nums.length // Set it in a variable so it doesn't calculate each iteration

  for (let i = 0; i < length; i++) {
    let key = nums[i];
    if (map.has(key)) {
      map.delete(key);
    } else { 
      map.set(key, i);
    }
  }
  let mapIter = map.keys();
  return mapIter.next().value;
}

// Using normal Object
const singleNumber = nums => {
  const obj = {};
  const length = nums.length // Set it in a variable so it doesn't calculate each iteration

  for (let i = 0; i < length; i++) {
    let key = nums[i];
    if (key in obj) {
      delete obj[key];
    } else { 
      obj[key] = i;
    }
  }
  return Object.keys(obj)[0]; //Object.keys returns an array of all keys, and [0] returns the first one
}