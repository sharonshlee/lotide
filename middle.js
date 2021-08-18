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

const assertArraysEqual = function (arr1, arr2) {
  return eqArrays(arr1, arr2)
    ? `✅Assertion Passed: ${arr1} === ${arr2}`
    : `❌Assertion Failed: ${arr1} !== ${arr2}`;
};

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

//Test Codes
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
