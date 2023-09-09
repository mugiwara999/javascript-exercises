const reverseString = function(string) {
  let length = string.length;
  let reverseString = "";
  for (let i = length - 1; i >= 0; i--) {
    reverseString = reverseString.concat(string.charAt(i));
  }
  return reverseString;
};


// Do not edit below this line
module.exports = reverseString;
