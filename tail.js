const assertEqual = function (actual, expected) {
  console.log(
    actual === expected
      ? `✅Assertion Passed: ${actual} === ${expected}`
      : `❌Assertion Failed: ${actual} !== ${expected}`
  );
};

const tail = function (array) {
  const newArr = [];

  for (let i = 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);
