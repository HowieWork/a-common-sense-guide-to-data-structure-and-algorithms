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
