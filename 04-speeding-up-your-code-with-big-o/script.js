'Use strict';
// Code Implementation 1: Bubble sort
const bubbleSort = array => {
  // 1. GET LAST UNSORTED ITEM INDEX
  let unsortedUntilIndex = array.length - 1;

  // 2. SORTING STARTING FROM INDEX 0 TO LAST UNSORTED ITEM INDEX
  while (unsortedUntilIndex > 0) {
    // ONE ROUND ITERATION
    let i = 0;
    while (i < unsortedUntilIndex) {
      if (array[i] > array[i + 1]) {
        let value = array[i];
        array[i] = array[i + 1];
        array[i + 1] = value;
      }
      i += 1;
    }
    unsortedUntilIndex -= 1;
  }

  // 3. RETURN SORTED ARRAY
  return array;
};

// bubbleSort([2, 1, 4, 3]);

// Code Implementation 2: Linear search
const hasDuplicateValue = array => {
  let existingNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (existingNumbers[array[i]] === 1) {
      return true;
    }
    if (existingNumbers[array[i]] !== 1) {
      existingNumbers[array[i]] = 1;
    }
  }
  return false;
};
// hasDuplicateValue([1, 2, 3, 4, 5, 1]);

// Book Exercises (Accuracy: 3/4 75%)
// 1. My answer: 6 (correct: about 7); 10,000; 2000; 10 (correct: about 11); 4,000,000
// 2. My answer: 16
// 3. My answer: O(N^2)
// 4. My answer:
const greatestNumber = array => {
  // 1. TEMPORARY GREATEST
  let tempGreatest = array[0];

  // 2. COMPARE EACH ITEM OF ARRAY WITH THE TEMP GREATEST *FOR LOOP
  for (let i = 1; i < array.length; i++) {
    if (array[i] > tempGreatest) tempGreatest = array[i];
  }

  // 3. RETURN THE GREATEST NUMBER
  return tempGreatest;
};

// TESTING
// greatestNumber([2, 1, 3, 4]);
