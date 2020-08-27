// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Example 1:
// Input: "III"
// Output: 3

// Example 2:
// Input: "IV"
// Output: 4

// Example 3:
// Input: "IX"
// Output: 9

// Example 4:
// Input: "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 5:
// Input: "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const romanToInt = function(s) {
  const map = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }
  let number = 0;

  if (s.indexOf('CM')!= -1) number -= 200;
  if (s.indexOf('CD')!= -1) number -= 200
  if (s.indexOf('XC')!= -1) number -= 20;
  if (s.indexOf('XL')!= -1) number -= 20;
  if (s.indexOf('IX')!= -1) number -= 2;
  if (s.indexOf('IV')!= -1) number -= 2;
  for (var i = 0; i < s.length; i++) {
      number += map[s[i]];
  }
  return number;
};