// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.
 
// Note: You may assume the string contains only lowercase English letters.

const firstUniqChar = s => {
  const obj = {};

  s.split('').map(l => obj[l] = obj[l] ? obj[l] + 1 : 1);

  for (let key in obj) {
    if (obj[key] === 1) return s.indexOf(key);
  }

  return -1;
}