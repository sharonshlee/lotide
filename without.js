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

/**Implement without which will return a subset of a given array, removing unwanted elements. */
const without = function (words, eliminate) {
  const newArr = [];
  for (let i = 0; i < words.length; i++) {
    //if the word exist, index of the array return >= 0
    if (eliminate.indexOf(words[i]) < 0) {
      newArr.push(words[i]);
    }
  }
  return newArr;
};

const words = ["hello", "world", "lighthouse"];
console.log(
  assertArraysEqual(without(words, ["lighthouse"]), [
    "hello",
    "world",
    "lighthouse",
  ])
);

/*
Output:
❌Assertion Failed: hello,world !== hello,world,lighthouse
*/
module.exports = without;
