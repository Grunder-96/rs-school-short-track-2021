/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let answer = '';
  let check = 1;
  let arg = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === str[i]) {
      check++;
      arg = str[i];
    } else {
      if (check === 1) {
        answer += arg;
      } else {
        answer += `${check}${arg}`;
      }
      arg = str[i + 1];
      check = 1;
    }
  }
  return answer;
}

module.exports = encodeLine;
