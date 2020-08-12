// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:
// Input: 123
// Output: 321

// Example 2:
// Input: -123
// Output: -321

// Example 3:
// Input: 120
// Output: 21

// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// * @param {number} x
// * @return {number}

// Runtime of 84ms, faster than 90.45% of JS submissions
const reverse = x => {
  let arr = ('' + Math.abs(x)).split('');
  let rev = Number(arr.reverse().join(''));

  //The upper bound of a signed integer is 2^31 - 1, since the first bit is the sign bit.
  if (rev > Math.pow(2, 31)-1) {
    return 0;
  }

  return x < 0 ? -rev : rev;
}