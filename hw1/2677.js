// 2677. Chunk Array
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  let index = 0;
  let resultArr = [];
  while (index < Object.keys(arr).length) {
    resultArr.push(arr.slice(index, index + size));
    index += size;
  }
  return resultArr;
};
