// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3


// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3

const isSymmetric = root => {
  // If the root is null, the tree is empty and empty tree is symmetric.
  if (root === null) return true;

  return isSymmetricHelper(root.left, root.right);
}

const isSymmetricHelper = (tree1, tree2) => {
  // If either tree is null, we check to see if the other three is also null and return their comparison.
  if (tree1 === null || tree2 === null) return tree1 === tree2;

  // If the values are different, they are not symmetric
  if (tree1.val !== tree2.val) return false;

  // Recursive call on both sides of the tree
  return isSymmetricHelper(tree1.left, tree2.right) &&
    isSymmetricHelper(tree1.right, tree2.left);
}