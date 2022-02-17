'Use strict';

// NOTE Code Implementation: Insertion Sort
const insertionSort = array => {
  // 1. LOOP THROUGH ALL ITEMS STARTING WITH INDEX 1
  let tempItemIndex = 1;

  while (tempItemIndex < array.length) {
    let tempItem = array[tempItemIndex];
    let position = tempItemIndex - 1;

    // 2. WITHIN EACH LOOP, LOOP ALL ITEMS BEFORE CURRENT INDEX
    while (position >= 0) {
      // 1) IF LARGER THAN TEMP ITEM, THEN SHIFT
      if (array[position] > tempItem) {
        array[position + 1] = array[position];
        position--;
      } else {
        // 2) IF SAME OR SMALLER, BREAK.
        break;
      }
    }

    array[position + 1] = tempItem;
    tempItemIndex++;
  }
  // 3. RETURN SORTED ARRAY
  return array;
};
// TESTING
// insertionSort([4, 2, 7, 1, 3, 5]);

// Book Exercises (Accuracy: 4/4 100%)
// 1. My answer: O(N^2)

// 2. My answer: O(N)

// 3. My answer:
// Best: total of the first pair of two numbers is 10;
// Worst: we have to go through all pairs *result could be 1) total of the last pair is 10; 2) the array doesn't contain such a pair;
// Average: we found a pair in the middle that can add up to 10;
// Worst: O(N^2)

// 4. My answer:
// O(N)
function containsX(string) {
  let foundX = false;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'X') {
      foundX = true;
      // NOTE CANNOT USE BREAK IN FOR LOOP
      // break;
      return foundX;
    }
  }
  return foundX;
}
