// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

// Ex.:
// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

const fearNotLetter = str => {
  const len = str.length;

  for (let i = 0; i < len; i++) {
    if (!str.charCodeAt(i+1)) return undefined;

    if (str.charCodeAt(i) + 1 !== str.charCodeAt(i+1)) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
}