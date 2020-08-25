// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

const pairElement = str => {
  const res = [];
  const arr = str.split('');
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    switch (arr[i]) {
      case 'A':
        res.push(['A', 'T'])
        break;
      case 'T':
        res.push(['T', 'A'])
        break;
      case 'C':
        res.push(['C', 'G'])
        break;
      case 'G':
        res.push(['G', 'C'])
      default:
        break;
    }
  }
  return res;
}