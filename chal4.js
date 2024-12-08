// 7 kyu
// Vowel Count
// 304175889% of 31,866152,170 of 416,836jayeshcp2 Issues Reported
//  JavaScript
// Node v18.x
// VIM
// EMACS
// Instructions
// Output
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//   return 0;
// }

function getCount(str) {
  let vowels = 0;
  for (i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      vowels++;
    }
  }
  return vowels;
}

console.log(getCount(""));
// getCount("hiiiii");
