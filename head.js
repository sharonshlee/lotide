const assertEqual = function (actual, expected) {
  console.log(
    actual === expected
      ? `✅Assertion Passed: ${actual} === ${expected}`
      : `❌Assertion Failed: ${actual} !=== ${expected}`
  );
};

const head = function (array) {
  return array.length > 0 ? array[0] : undefined;
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
