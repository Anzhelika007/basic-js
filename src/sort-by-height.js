const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let index = arr.map((x, i)=> x <0? i: -2).filter((x)=> x>=0);
  let sortArr = arr.filter((x)=> x >-1).sort(function (a, b) {return a - b;});
  for (let i=0; i<(index.length + sortArr.length); i++)
      if(index.includes(i)){
          sortArr.splice(i, 0, -1);
      }
  return sortArr;
}

module.exports = {
  sortByHeight
};
