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

/*
The function will return a "slice of the array with elements taken from the beginning." 
It should keep going until the callback/predicate returns a truthy value.
*/

const takeUntil = function (array, callback) {
  const results = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    }
    results.push(item);
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2])); //true
console.log(assertArraysEqual(results1, [1, 2, 5, 7])); //false

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"])); //true
console.log(assertArraysEqual(results2, ["I've", "been", "to"])); //false

/*
Output:
[ 1, 2, 5, 7, 2 ]
✅Assertion Passed: 1,2,5,7,2 === 1,2,5,7,2
❌Assertion Failed: 1,2,5,7,2 !== 1,2,5,7
---
[ "I've", 'been', 'to', 'Hollywood' ]
✅Assertion Passed: I've,been,to,Hollywood === I've,been,to,Hollywood
❌Assertion Failed: I've,been,to,Hollywood !== I've,been,to
*/
