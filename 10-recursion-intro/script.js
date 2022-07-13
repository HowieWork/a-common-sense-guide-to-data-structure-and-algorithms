'Use strict';

// Book Exercises (Accuracy: 3/4 75%)
// 1. My answer: low = high or low > high, whichever comes first
// 2. My answer: 10*8*6*4*2*0*(-2)... Will cause a infinite loop. Computer will run out of memory and stop working.
// IMPORTANT 3. My answer: return if low >= high (correct: if high == low: return low)
// 4. My answer:
const array = [
  1,
  2,
  3,
  [4, 5, 6],
  7,
  [8, [9, 10, 11, [12, 13, 14]]],
  [15, 16, 17, 18, 19, [20, 21, 22, [23, 24, 25, [26, 27, 29]], 30, 31], 32],
  33,
];

const printAllNumbers = array => {
  // RECURSION
  for (let i = 0; i < array.length; i++) {
    // 1) BASE CASE; ITEM IS A NUMBER
    if (typeof array[i] === 'number') {
      console.log(array[i]);
    } else {
      // 2) REGULAR CASE: ITEM IS AN ARRAY
      printAllNumbers(array[i]);
    }
  }

  return;
};

// printAllNumbers(array);

// Double Each Item in Array
// double each item of array and mutate input array
const doubleArray = function (array, index = 0) {
  // base case
  if (index == array.length) return;
  array[index] *= 2;
  doubleArray(array, index + 1);
};

// const testingArray = [1, 2, 3, 4];
// doubleArray(testingArray);
// console.log(testingArray);

// Factorial
// Option 1: Iterative way - Bottom Up
const factorialOne = function (num) {
  let i = 1;
  let product = 1;
  while (i <= num) {
    product = product * i;
    i++;
  }
  return product;
};

// Option 2: Iterative way - Top Down
const factorialTwo = function (num) {
  let i = num - 1;
  let product = num;
  while (i >= 1) {
    product = product * i;
    i--;
  }
  return product;
};

// Option 3: Recursion - Bottom Up
const factorialRecursiveBottomUp = function (num, i = 1, product = 1) {
  if (i > num) {
    return product;
  }
  return factorialRecursiveBottomUp(num, i + 1, product * i);
};

// Option 4: Recursion - Top Down
const factorialRecursiveTopDown = function (num) {
  if (num == 1) return 1;
  return num * factorialRecursiveTopDown(num - 1);
};

// Exercises
// 1. Array Sum
const sumOfArray = function (array) {
  if (array.length === 1) return array[0];
  return array[0] + sumOfArray(array.slice(1));
  // IMPORTANT NOTE -1 IS A VALID KEY FOR AN ARRAY OBJECT
  // return sumOfArray(array.slice(0, -1)) + array[array.length - 1];
};
const testingArray = [1, 2, 3, 4];
// console.log(sumOfArray(testingArray));

// 2. String Reversal
// "abcde" -> "edcba"
const reverseString = function (string) {
  if (string.length === 1) return string;
  return reverseString(string.slice(1)) + string[0];
};
const testingString = 'abcde';
// console.log(reverseString(testingString));

// 3. Counting X
// "axbxcxd" -> 3
const countingX = function (string) {
  // base case
  // if (string.length === 1) {
  //   if (string[0] === 'x') return 1;
  //   else return 0;
  // }
  if (string.length === 0) return 0;

  if (string[0] === 'x') return countingX(string.slice(1)) + 1;
  else return countingX(string.slice(1));
};
const testingStringTwo = 'axbxcxd';
// console.log(countingX(testingStringTwo));

// 4. The Staircase Problem
// N steps; 1 or 2 or 3 step(s) each time; How many paths?
const numOfPaths = function (totalSteps) {
  // base case
  if (totalSteps === 0) return 0;
  if (totalSteps === 1) return 1;
  if (totalSteps === 2) return 2;
  if (totalSteps === 3) return 4;

  return (
    numOfPaths(totalSteps - 1) +
    numOfPaths(totalSteps - 2) +
    numOfPaths(totalSteps - 3)
  );
};
// console.log(numOfPaths(4));

// 5. Anagram Generation
// "abc" -> ["abc", "acb", "bac", "bca", "cab", "cba"]
const generateAnagram = function (string) {
  // base case
  if (string.length <= 1) return [string[0]];

  const result = [];
  const preResult = generateAnagram(string.slice(1));

  for (const item of preResult) {
    for (let i = 0; i < item.length + 1; i++) {
      // string[0] needs to be inserted at index i
      const newString = item.slice(0, i) + string[0] + item.slice(i);
      result.push(newString);
    }
  }
  return result;
};

console.log(generateAnagram('abc'));
