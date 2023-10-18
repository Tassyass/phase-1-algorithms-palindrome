function isPalindrome(word) {
  // Write your algorithm here

word = word.replace(/[^a-z]/g , '').toLowerCase();
 
const reversedWord= word.split('').reverse().join('');
 return word === reversedWord;

}
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
