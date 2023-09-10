const sumAll = function(startInteger, endInteger) {

  if (startInteger > endInteger) {
    let tmp = endInteger;
    endInteger = startInteger;
    startInteger = tmp;
  }

  if (typeof (startInteger) !== 'number' || typeof (endInteger) !== 'number') {
    return 'ERROR';
  }

  if (startInteger < 0 || endInteger < 0) {
    return "ERROR"
  }
  let finalSum = 0;

  for (let i = startInteger; i <= endInteger; i++) {

    finalSum = finalSum + i;
  }

  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
