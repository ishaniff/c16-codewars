// 8 kyu Multiply 259340582% of 31,5311,596,547 of 5,534,60812 Issues Reported
// This code does not execute properly. Try to figure out why.
// function multiply(a, b){
// a * b
// }

function multiply(a, b) {
  return a * b;
}
// too simple so i did another problem below

// 7 kyu
// String ends with?
// 161037387% of 14,27187,961 of 231,660jhoffner7 Issues Reported
//  JavaScript
// Node v18.x
// VIM
// EMACS
// Instructions
// Output
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  return str.substring(str.length - ending.length) === ending;
}

console.log(solution("abcd", "cd"));
