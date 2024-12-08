// 6 kyu
// Split Strings
// 211447789% of 11,45952,547 of 157,458jhoffner
//  JavaScript
// Node v18.x
// VIM
// EMACS
// Instructions
// Output
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  {
    paired = [];
    if (str.length % 2 != 0) {
      str += "_";
    }
    for (i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        paired.push(str[i] + str[i + 1]);
      }
    }
  }
  return paired;
}
// console.log(str.split(""));
console.log(solution("abcdddddede"));

// this problem took me well over an hour but i learned a lot, my initial approach could have worked but it was not nearly as intuitive, included a couple of nested if statements
