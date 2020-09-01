// Given two arrays, write a function to compute their intersection.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.

const intersect = (nums1, nums2) => {
  let res = [];

  if (!nums1.length || !nums2.length) return res;
  if (nums1.length <= 1) return nums1;
  if (nums2.length <= 1) return nums2;
  
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        res.push(nums1.splice(i, 1));
        i--;
        nums2.splice(j, 1);
        j--;
        break; // Added break here so runtime is faster
      }
    }
  }

  return res;
}

const intersect = (nums1, nums2) => {
  return nums1.filter(item => (
          nums2.includes(item)
          ? nums2.splice(nums2.indexOf(item), 1)
          : false
        ));
}