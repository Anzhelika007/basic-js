const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numberMin = String(n).split('').sort()[0];
  let numberNextMin = String(n).split('').sort()[1];
  const sumMin = Number(String(n).replace(String(numberMin), ''));
  const sumNextMin = Number(String(n).replace(String(numberNextMin), ''));
  console.log(sumMin, sumNextMin)
  if ((sumMin - sumNextMin) >= 0) {
      return sumMin;
  } else {
     return sumNextMin; 
  } 
}

module.exports = {
  deleteDigit
};
