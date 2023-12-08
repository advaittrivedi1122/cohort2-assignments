/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram1(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	str1 = str1.toLowerCase().split("").sort().join("");
	str2 = str2.toLowerCase().split("").sort().join("");
	return (str1 == str2)
}

function isAnagram(s, t) {
	s = s.toLowerCase()
	t = t.toLowerCase()
	if (s.length !== t.length) return false;
    let s1 = 0, s2 = 0;
    for (let i=0; i < s.length; i++) {
        let asciiForS = s.charCodeAt(i)
        let asciiForT = t.charCodeAt(i)
        asciiForS = asciiForS % 2 == 0 ? (asciiForS * 2) : (asciiForS * 3)
        asciiForT = asciiForT % 2 == 0 ? (asciiForT * 2) : (asciiForT * 3)
        s1 += asciiForS
        s2 += asciiForT
    }
    return (s1 === s2)
}

console.log(isAnagram("hello world", "hello world"))
console.log(isAnagram1("hello world", "hello world"))

module.exports = isAnagram;
