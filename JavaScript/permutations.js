// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

// Personal note: Best explanation for this answer: https://www.youtube.com/watch?v=xghJNlMibX4

const permute = nums => {
 const result = [];

 const swap = (arrToSwap, idx1, idx2) => {
   let temp = arrToSwap[idx1];
   arrToSwap[idx1] = arrToSwap[idx2];
   arrToSwap[idx2] = temp;
 };

 const generate = (n, arr) => {
   if (n === 1) return result.push(arr.slice());

   generate(n-1, arr);

   for (let i = 0; i < n-1; i++) {
     n % 2 === 0 ? swap(arr, i, n-1) : swap(arr, 0, n-1);

     generate(n-1, arr);
   }
 }

 generate(nums.length, nums.slice());

 return result;
}