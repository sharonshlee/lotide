//take in an array and return the middle-most element(s) of the given array.
const middle = function (arr) {
  if (arr.length === 1 || arr.length === 2) {
    return [];
  }
  let middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  } else {
    return [arr[middleIndex]];
  }
};

module.exports = middle;
