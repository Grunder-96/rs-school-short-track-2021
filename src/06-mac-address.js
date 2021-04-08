/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arrayN = n.split('-');
  if (arrayN.length !== 6) {
    return false;
  }

  let flag = true;
  arrayN.forEach((el) => {
    if (el.length !== 2) {
      flag = false;
    }
    if (el.toString().replace(/[A-F0-9]/g, '').length !== 0) {
      flag = false;
    }
  });
  if (flag === false) {
    return false;
  }
  return true;
}

module.exports = isMAC48Address;
