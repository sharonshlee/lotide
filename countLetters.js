const assertEqual = function (actual, expected) {
  console.log(
    actual === expected
      ? `✅Assertion Passed: ${actual} === ${expected}`
      : `❌Assertion Failed: ${actual} !== ${expected}`
  );
};

/*
The function should take in a sentence (as a string) and 
then return a count of each of the letters in that sentence.
 */
const countLetters = function (sentence) {
  const totalLetters = {};
  sentence = sentence.split(" ").join("");

  for (const item of sentence) {
    if (totalLetters[item]) {
      totalLetters[item] += 1;
    } else {
      totalLetters[item] = 1;
    }
  }

  return totalLetters;
};

const result = countLetters("lighthouse in the house");

assertEqual(result["l"], 1); //passed
assertEqual(result["h"], 2); //=4 failed
assertEqual(result["t"], 2); //passed

/*
✅Assertion Passed: 1 === 1
❌Assertion Failed: 4 !== 2
✅Assertion Passed: 2 === 2
 */
