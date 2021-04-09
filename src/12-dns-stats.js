/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  const mass = [];
  domains.forEach((el) => {
    const arr = el.split('.').reverse();
    let acc = '';
    for (let i = 0; i < arr.length; i++) {
      acc += `.${arr[i]}`;
      mass.push(acc);
    }
    acc = '';
  });
  const m = mass.sort();
  let col = 1;
  for (let j = 0; j < m.length; j++) {
    if (m[j] === m[j + 1]) {
      col++;
    } else {
      obj[m[j]] = col;
      col = 1;
    }
  }
  return obj;
}

module.exports = getDNSStats;
