const eqArrays = function (a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i]) || Array.isArray(b[i])) {
      return eqArrays(a[i], b[i]);
    } else if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function (object1, object2) {
  const arrKeys1 = Object.keys(object1);
  const arrKeys2 = Object.keys(object2);
  const arrValues1 = Object.values(object1).sort(
    ([a, b], [c, d]) => c - a || b - d
  );
  const arrValues2 = Object.values(object2).sort(
    ([a, b], [c, d]) => c - a || b - d
  );

  if (arrKeys1.length === arrKeys2.length) {
    if (eqArrays(arrValues1, arrValues2)) {
      return true;
    }
  }
  return false;
};

/*
Take in two objects and console.log an appropriate message to the console.
*/
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  console.log(
    eqObjects(actual, expected)
      ? `✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
      : `❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
  );
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

/*
Output:
✅Assertion Passed: { a: '1', b: '2' } === { b: '2', a: '1' }
❌Assertion Failed: { a: '1', b: '2' } !== { a: '1', b: '2', c: '3' }
*/
