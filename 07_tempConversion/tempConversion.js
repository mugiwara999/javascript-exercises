const convertToCelsius = function(fahrenheitTemp) {

  let celciusTemp = 5 / 9 * (fahrenheitTemp - 32);

  celciusTemp = Math.round(celciusTemp * 10) / 10;

  return celciusTemp;


};

const convertToFahrenheit = function(celciusTemp) {

  let fahrenheitTemp;

  fahrenheitTemp = 9 * celciusTemp / 5 + 32;

  fahrenheitTemp = Math.round(fahrenheitTemp * 10) / 10
  return fahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
