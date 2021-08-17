const assertEqual = function (actual, expected) {
  console.log(
    actual === expected
      ? `✅Assertion Passed: ${actual} === ${expected}`
      : `❌Assertion Failed: ${actual} !== ${expected}`
  );
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 3);
