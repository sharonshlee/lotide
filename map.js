const words = ["ground", "control", "to", "major", "tom"];

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

//return a new array based on the results of the callback function.
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"])); //true
console.log(assertArraysEqual(results1, ["g", "c", "t", "m"])); //false

/*
Output:
[ 'g', 'c', 't', 'm', 't' ]
✅Assertion Passed: g,c,t,m,t === g,c,t,m,t
❌Assertion Failed: g,c,t,m,t !== g,c,t,m
*/
