'Use strict';

// Book Exercises (Accuracy: 4/5 80%)
// 1. My answer: O(1)
// 2. My answer: O(N)
// 3. My answer: O(N) (correct: O(log N))
// 4. My answer: O(N)
// 5. My answer: O(1)

// NOTE 3. What is Big O of the following function?
function chessboardSpace(numberOfGrains) {
  let chessboardSpaces = 1;
  let placedGrains = 1;
  while (placedGrains < numberOfGrains) {
    placedGrains *= 2;
    chessboardSpaces += 1;
  }
  return chessboardSpaces;
}
// Please read carefully. It returns chessboard spaces NOT number of grains.
