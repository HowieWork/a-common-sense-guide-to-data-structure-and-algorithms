'Use strict';

// Binary search in ordered array
const binarySearch = (array, value) => {
  // 1. DEFINE LOWER BOUND & UPPER BOUND
  let lowerBound = 0;
  let upperBound = array.length - 1;

  while (lowerBound <= upperBound) {
    // 2. GETTING MID POINT VALUE
    const midPoint = Math.floor((lowerBound + upperBound) / 2);
    const midPointValue = array[midPoint];

    // 3. COMPARISON
    if (value === midPointValue) {
      // 1). IF VALUE EXISTS
      return `Value ${value} exists in target array at index ${midPoint}.`;
    }

    if (value > midPointValue) {
      lowerBound = midPoint + 1;
    }

    if (value < midPointValue) {
      upperBound = midPoint - 1;
    }
  }

  // 2). IF VALUE NOT EXISTS
  return `Value ${value} does NOT exists in target array.`;
};

// binarySearch([0, 1, 2, 3, 4, 5], 0);

// Book Exercises (Accuracy: 2/3 66.7%)
// 1. My answer: 4
// 2. My answer: 1
// 3. My answer: 17 (correct: 16)

// NOTE 3. What is the maximum number of steps it would take to perform a binary search on an array of size 100,000?
// To solve this, we need to count how many times we halve 100,000 until we get down to 1. If we keep dividing 100,000 by 2, we see that it takes us 16 times until we get down to about 1.53.This means a worst-case scenario would take about 16 times.
