/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let answer = n;
  function summ (el) {
    let temp = 0;
    for (let i = 0; i < String(el).length; i++) {
      temp += Number(String(el).charAt(i));
    }
    if (String(temp).length > 1) {
      answer = temp;
      summ(answer);
    } else {
      answer = temp;
    }
  }
  summ(n);
  return answer;
}

module.exports = getSumOfDigits;
