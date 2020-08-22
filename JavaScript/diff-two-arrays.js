// Compare two arrays and return a new array with any items only found in one of 
// the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note:
// You can return the array with its elements in any order.

// Ex. 1: 
// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] 
// should return ["diorite", "pink wool"].

// Ex. 2:
// [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].

// Ex. 3:
// [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].

const diffArray = (arr1, arr2) => {
  const len1 = arr1.length;
  const len2 = arr2.length;
  const arr = [];

  if (!len1) return arr2;
  if (!len2) return arr1;

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (!arr1.includes(arr2[j]) && !arr.includes(arr2[j])) {
        arr.push(arr2[j])
      }
      if (!arr2.includes(arr1[i]) && !arr.includes(arr1[i])) {
        arr.push(arr1[i]);
      }
    }
  }
  return arr;
}