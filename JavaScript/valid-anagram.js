// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

const isAnagram = (s, t) => {
  // First try, time complexity O(n log n), since sort costs O(n log n)
  const len = s.length;
  const arrS = [...s].sort();
  const arrT = [...t].sort();

  if (arrS.length !== arrT.length) return false;
  for (let i = 0; i < len; i++) {
    if (arrS[i] !== arrT[i]) return false;
  }
  return true;
}

const isAnagram = (s, t) => {
  // Second try faster, time complexity O(n), since create an object is constant
  const obj = {};
  s.split('').map(a => obj[a] = obj[a] ? obj[a] + 1 : 1);
  t.split('').map(a => obj[a] = obj[a] ? obj[a] - 1 : 1);
  return Object.keys(obj).every(key => obj[key] === 0);
}