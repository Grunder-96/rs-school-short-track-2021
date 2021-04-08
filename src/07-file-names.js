/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const answer = names.slice();
  function searchDuble(value, array, index) {
    let pos = 0;
    const v = value;
    const a = array;
    let i = index;
    for (i; i < answer.length; i++) {
      if (v === a[i]) {
        if (pos === 0) {
          a[i] = `${a[i]}`;
        } else {
          a[i] = `${a[i]}(${pos})`;
        }
        pos++;
      }
    }
    pos = 0;
  }
  for (let i = 0; i < answer.length; i++) {
    searchDuble(answer[i], answer, i);
  }
  return answer;
}

module.exports = renameFiles;
