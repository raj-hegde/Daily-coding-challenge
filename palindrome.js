const palindrome = (str) =>
  str === str.split("").reverse().join("") ? "Palindrome" : "Not a Palindrome";

console.log(palindrome("madam"));
console.log(palindrome("rajeev"));
