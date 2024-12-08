// 7 kyu
// Get the Middle Character
// 231467689% of 21,578107,697 of 271,762Shivo
//  JavaScript
// Node v18.x
// VIM
// EMACS
// Instructions
// Output
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(s) {
  length = s.length;
  if (length % 2 !== 0) {
    return s[length / 2 - 0.5];
  }
  return s.slice(length / 2 - 1, length / 2 + 1);
}

console.log(getMiddle("xxIxx"));

// great problem, made me realize i did not know slice as well a i thought i did
