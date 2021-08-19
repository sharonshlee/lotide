/*
Return all the indices (zero-based positions) in the string 
where each character is found.

For each letter, instead of returning just one number 
to represent its number of occurrences, multiple numbers 
may be needed to represent all the places in the string that it shows up.
 */
const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue; //to next i
    }
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

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

const results1 = letterPositions("lighthouse in the house");

console.log(assertArraysEqual(results1["l"], [0]));
console.log(assertArraysEqual(results1["h"], [0]));
console.log(assertArraysEqual(results1["e"], [9, 16, 22]));

/*
Output:
✅Assertion Passed: 0 === 0
❌Assertion Failed: 3,5,15,18 !== 0
✅Assertion Passed: 9,16,22 === 9,16,22
*/
