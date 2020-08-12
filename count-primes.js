// Count the number of prime numbers less than a non-negative number, n.

// Example:
// Input: 10
// Output: 4

// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// Runtime 144ms faster than 78.30% JS submissions
const countPrimes = n => {
  // Here we use the Sieve of Erastosthenes, where we first assume all numbers to be prime (true).
  // For this we create an array of n size and then iterate through them setting the non-prime to false.
  let arr = Array(n).fill(true);
  // 0 and 1 are not prime, so we set them to false and start our iteration on i=2.
  arr[0] = false;
  arr[1] = false;

  // If n is not prime, it'll always have a factor that is < or = to its sqrt.
  // Example: Number 36. Its factors are 1*36, 2*18, 3*12, 4*9 and finally 6*6.
  // Each case of 36 factors always contains one number < or = its sqrt.
  // This way we only need to iterate until i*i < n (in the 36 case, until 5*5 since we don't need the 36 itself)
  for (let i = 2; i*i < n; i++) {
    if (arr[i]) {
      // The inner loop will iterate over the multiples of i (2 to start with) and set them to false.
      // So first iteration starts at 4: j=i*i(4) => set arr[4] to false => j+=i(4+2=6). 
      // Next iteration will set arr[6] to false... until j < n.
      // Then we return to the outer loop and check the multiples of i++ (3 is the next one)
      // Once i*i > n, we can stop iterating as explained above.
      for (j = i*i; j < n; j+=i) {
        arr[j] = false;
      }
    }
  }
  // In the end we just .filter our array (since .filter returns true to keep the element and false otherwise, 
  // only the true elements will return)
  return arr.filter(el => el).length;
}

// Without the comments
const countPrimes = n => {
  let arr = Array(n).fill(true);
  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i*i < n; i++) {
    if (arr[i]) {
      for (j = i*i; j < n; j+=i) {
        arr[j] = false;
      }
    }
  }

  return arr.filter(el => el).length;
}
