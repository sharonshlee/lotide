const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const assertEqual = function (actual, expected) {
  console.log(
    actual === expected
      ? `✅Assertion Passed: ${actual} === ${expected}`
      : `❌Assertion Failed: ${actual} !== ${expected}`
  );
};

/*
  Takes in an object and a value. 
  It should scan the object and return the first key which contains the given value. 
  If no key with that given value is found, then it should return undefined.
  */
const findKeyByValue = function (obj, val) {
  for (const key in obj) {
    if (obj[key] === val) {
      return key;
      break;
    }
  }
  return undefined;
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

/*
Output:
✅Assertion Passed: drama === drama
✅Assertion Passed: undefined === undefined
*/
