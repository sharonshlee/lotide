const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const assertEqual = function (actual, expected) {
  console.log(
    actual === expected
      ? `✅Assertion Passed: ${actual} === ${expected}`
      : `❌Assertion Failed: ${actual} !== ${expected}`
  );
};

/*
countOnly will be given an array and an object. 
It will return an object containing counts of everything that the input object listed.
 */
const countOnly = function (allItems, itemsToCount) {
  const totalLetters = {};

  for (let i = 0; i < allItems.length; i++) {
    const item = allItems[i];
    //check itemsToCount truthy keys, return match totalLetters
    if (itemsToCount[item]) {
      if (!totalLetters[item]) {
        totalLetters[item] = 1;
      } else {
        totalLetters[item] += 1;
      }
    }
  }
  return totalLetters;
};

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

/**
Output:
✅Assertion Passed: 1 === 1
✅Assertion Passed: undefined === undefined
✅Assertion Passed: 2 === 2
✅Assertion Passed: undefined === undefined
 */
