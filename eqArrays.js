const assertEqual = function (actual, expected) {
  return actual === expected
    ? `✅Assertion Passed: ${actual} === ${expected}`
    : `❌Assertion Failed: ${actual} !== ${expected}`;
};

const eqArrays = function (a, b) {
  let same = 0;
  let different = 0;

  for (let i = 0; i < a.length; i++) {
    a[i] === b[i] ? same++ : different++;
  }
  return same === a.length;
};

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => true
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)); // => false

console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); // => true
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)); // => false
