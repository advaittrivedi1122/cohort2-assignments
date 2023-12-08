/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase()
  let newStr = ""
  let newStrLength = 0
  for(let i=0; i < str.length; i++) {
    let ascii = str.charCodeAt(i)
    if (ascii>=97 && ascii<=122) {
      newStr += str[i]
      newStrLength++
    }
  }
  let backPtr = newStrLength - 1
  for(let i = 0; i < newStrLength; i++) {
    if (newStr[i] !== newStr[backPtr]) {
      return false
    }
    backPtr--
  }
  return true
}

console.log(isPalindrome("hello"))

module.exports = isPalindrome;
