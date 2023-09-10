const add = function(number1, number2) {

  return number1 + number2;

};

const subtract = function(number1, number2) {

  return number1 - number2;

};

const sum = function(array) {

  let answer = 0;

  array.forEach(item => {
    answer += item;
  });

  return answer;
};

const multiply = function(array) {

  let answer = 1;
  array.forEach(item => {

    answer *= item;
  });

  return answer;

};

const power = function(base, power) {

  let answer = 1;
  for (let i = 0; i < power; i++) {

    answer *= base;
  }

  return answer;
};

const factorial = function(number) {

  let fact = 1;
  for (let i = 1; i < number + 1; i++) {
    fact *= i;
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
