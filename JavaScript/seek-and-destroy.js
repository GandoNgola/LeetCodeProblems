// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

// Exs.:

// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].

// destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", 
// "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].

const destroyer = (arr, ...args) => {
  const len1 = arr.length;
  const len2 = args.length;

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (arr.includes(args[j])) {
        let index = arr.indexOf(args[j]);
        arr.splice(index, 1);
      }
    }
  }
  return arr;
}