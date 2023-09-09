const repeatString = function(string, n) {

  if (n < 0) {
    return 'ERROR';
  }
  let answer = "";
  for (let i = 0; i < n; i++) {
    answer = answer + string;
  }
  return answer;
};

// Do not edit below this line
module.exports = repeatString;
