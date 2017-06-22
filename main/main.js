var sum = 0;
module.exports = function main(str) {
  for (var i = 0; i <str.length; i++){
    sum += parseInt(str[i]);
  }  
  return sum;
};
