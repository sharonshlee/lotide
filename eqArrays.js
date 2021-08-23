/**Implement a function eqArrays which takes in two arrays and returns true or false,
 * based on a perfect match. */
const eqArrays = function (a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
