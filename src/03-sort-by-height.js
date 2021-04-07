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
  function s (a, b) {
    return (a - b);
  }
  const arrFilter = arr.filter((el) => el !== -1).sort(s);
  const result = arr;
  let i = 0;
  result.forEach((el, index) => {
    if (el && el !== -1) {
      result[index] = arrFilter[i];
      i++;
    }
  });
  return result;
}

module.exports = sortByHeight;
