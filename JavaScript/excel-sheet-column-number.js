// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
//     ...

// Example 1:
// Input: "A"
// Output: 1

// Example 2:
// Input: "AB"
// Output: 28

// Example 3:
// Input: "ZY"
// Output: 701

// Constraints:

// 1 <= s.length <= 7
// s consists only of uppercase English letters.
// s is between "A" and "FXSHRXW".

const titleToNumber = s => {
  const len = s.length;
  // Create an array, reverse it (since in "AAA" for example, the last A is 
  // 26^0, then the second last 26^1, and the first 26^2). Then use 
  // map() instead of forEach() since it's faster, and turn letters into numbers.
  const arr = [...s].reverse().map(letter => letter.charCodeAt() - 64);
  let res = 0;

  for (let i = 0; i < len; i++) {
    res += Math.pow(26, i) * arr[i];
  }

  return res;
}