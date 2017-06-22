'use strict';
module.exports = function main(str) {
  var sum = 0;
  for (var i = 0; i <str.length; i++){
    sum += parseInt(str[i]);
  }  
  return sum;
};
