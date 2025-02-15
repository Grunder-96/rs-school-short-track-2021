/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  function binarySearch(list, n) {
    let first = 0;
    let last = list.length - 1;
    let position = -1;
    let found = false;
    let middle;

    while (found === false && first <= last) {
      middle = Math.floor((first + last) / 2);
      if (list[middle] === n) {
        found = true;
        position = middle;
      } else if (list[middle] > n) {
        last = middle - 1;
      } else {
        first = middle + 1;
      }
    }
    return position;
  }
  return binarySearch(array, value);
}

module.exports = findIndex;
