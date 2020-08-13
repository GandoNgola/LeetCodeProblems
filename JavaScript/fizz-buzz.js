// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

const fizzBuzz = n => {
  let arr = [...Array(n+1).keys()].slice(1);

  arr.forEach((val, i) => {
    arr[i] = val.toString();
    if (val % 3 === 0) {
      arr[i] = 'Fizz';
    } 
    if (val % 5 === 0) {
      arr[i] = 'Buzz';
    }
    if (val % 15 === 0) {
      arr[i] = 'FizzBuzz';
    }
  });
  return arr;
}