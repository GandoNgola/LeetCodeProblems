// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//     / \
//   -3   9
//   /   /
// -10  5

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const sortedArrayToBST = nums => {
  let len = nums.length;
  // Find the root node, which is in the middle of the array
  let mid = Math.floor(len/2);
  let node = new TreeNode(nums[mid]);

  // Base case
  if (!len) return null;

  // Recursive call it until it hits the base cases, setting left nodes
  // since all nums from index 0 to mid are left nodes
  let left = nums.slice(0, mid);
  node.left = sortedArrayToBST(left);

  // Same thing as above, but for the right;
  let right = nums.slice(mid+1, len);
  node.right = sortedArrayToBST(right);

  return node;
}