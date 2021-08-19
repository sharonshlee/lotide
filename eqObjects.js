const assertEqual = function (actual, expected) {
  console.log(
    actual === expected
      ? `✅Assertion Passed: ${actual} === ${expected}`
      : `❌Assertion Failed: ${actual} !== ${expected}`
  );
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

/*
Implement the definition for function eqObjects which will take in two objects and 
returns true or false, based on a perfect match.
*/
const eqObjects = function (object1, object2) {
  const arrKeys1 = Object.keys(object1);
  const arrKeys2 = Object.keys(object2);
  const arrValues1 = Object.values(object1).sort((a, b) => a - b);
  const arrValues2 = Object.values(object2).sort((a, b) => a - b);

  if (arrKeys1.length === arrKeys2.length) {
    if (eqArrays(arrValues1, arrValues2)) {
      console.log(eqArrays(arrValues1, arrValues2));
      return true;
    }
  }
  return false;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

/*
✅Assertion Passed: true === true
✅Assertion Passed: false === false
*/
