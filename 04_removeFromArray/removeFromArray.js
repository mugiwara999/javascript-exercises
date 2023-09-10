const removeFromArray = function() {

  let length = arguments[0].length;

  let argumentLength = arguments.length;

  for (let j = 0; j < argumentLength; j++) {


    for (let i = 0; i < length; i++) {

      if (arguments[j] === arguments[0][i]) {
        arguments[0].splice(i, 1);
        ;
      }
    }
  }
  return arguments[0];

};

// Do not edit below this line
module.exports = removeFromArray;
