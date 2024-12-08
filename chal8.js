// 7 kyu
// Highest and Lowest
// 341178590% of 23,372121,220 of 299,700Deantwo
//  JavaScript
// Node v18.x
// VIM
// EMACS
// Instructions
// Output
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
  const numArray = numbers.split(" ").map(Number);
  return `${Math.max(...numArray)} ${Math.min(...numArray)}`;
}

console.log(highAndLow("3 3 1 -2"));

// for how simple this was it was a little tricky, at first i wanted to parse int each element after splitting it into an array that way i could sort them a,b a-b style and then log the min and max with array [0] and array[array.length-1] but after my learn javascript lessons it reminded me of the map method so i used that instead
