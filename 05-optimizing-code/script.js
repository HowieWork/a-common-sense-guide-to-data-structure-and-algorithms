'Use strict';

// Code Implementation: Selection Sort
const selectionSort = array => {
  for (let i = 0; i < array.length - 1; i++) {
    let lowestItemIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowestItemIndex]) {
        lowestItemIndex = j;
      }
    }
    if (lowestItemIndex != i) {
      const temp = array[i];
      array[i] = array[lowestItemIndex];
      array[lowestItemIndex] = temp;
    }
  }
  return array;
};

// Book Exercises (Accuracy: 5/5 100%)
// 1. My answer: O(N)
// 2. My answer: O(N^2)
// 3. My answer: O(N)
// 4. My answer: O(N)
// 5. My answer: O(N^2)
