const fibonacci = function(number) {

  let a = 1;
  let b = 1;

  number = Number(number);
  if (number == 1 || number == 2) {
    return 1;
  };

  if (number < 0) {
    return "OOPS";
  }
  let sum;
  for (let i = 0; i < number - 2; i++) {

    sum = a + b;
    a = b;
    b = sum;
  }

  return sum;
};

// Do not edit below this line
module.exports = fibonacci;
