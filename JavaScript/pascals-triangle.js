
// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

// Personal note: In Pascal's triangle, each number is the numbers directly above it added together. Eg.: The number
// 2 in array[2][1] of the example above is the addition of 1 in array[1][0] + 1 in array[1][1].

const generate = numRows => {
  let res = [];

  for (let i = 0; i < numRows; i++) {
    res[i] = [];
    res[i][0] = res[i][i] = 1;

    for (let j = 1; j < i; j++) {
      res[i][j] = res[i-1][j-1] + res[i-1][j];
    }
  }

  return res;
}