'Use strict';

// IMPORTANT Fibonacci * an example of overlapping subproblems
// NOTE SOLUTION-1: O(2^N)
const getFib_V1 = n => {
  // BASE CASE
  if (n === 0 || n === 1) return n;

  // SUBPROBLEM
  return getFib(n - 1) + getFib(n - 2);
};

// console.log(getFib_V1(10));

// NOTE SOLUTION-2: O(N) * passing an additional argument - Hash Table
// MEMO HASH TABLE WILL BE SHARED ACROSS ALL THE CALLS TO THE GETFIB FUNCTION.
const getFib_V2 = (n, memo = {}) => {
  // BASE CASE
  if (n === 0 || n === 1) return n;

  // CHECK IF GETFIB(N) EXISTS IN HASH TABLE - MEMO
  if (!memo[n]) {
    memo[n] = getFib_V2(n - 2, memo) + getFib_V2(n - 1, memo);
  }

  return memo[n];
};

// console.log(getFib_V2(10, {}));

// NOTE SOLUTION-3: O(?) * BOTTOM-UP
const getFib_V3 = n => {
  if (n === 0) return n;
  let a = 0;
  let b = 1;
  for (let i = 1; i < n; i++) {
    const temp = a;
    a = b;
    b = temp + a;
  }
  return b;
};

// console.log(getFib_V3(3));

// Book Exercises
// 1. My answer:
const addUntil100 = array => {
  // BASE CASE
  if (array.length === 0) return 0;

  const sumOfRemainingNums = addUntil100(array.slice(1, array.length));

  if (array[0] + sumOfRemainingNums > 100) {
    return sumOfRemainingNums;
  } else {
    return array[0] + sumOfRemainingNums;
  }
};

// console.log(addUntil100([2, 34, 60, 20]));

// IMPORTANT REMEMBER TO PASS SHARING MEMO ARGUMENT!

// 2. Golomb sequence My answer:
const golomb = (n, memo = {}) => {
  if (n === 1) return 1;

  if (!memo[n]) {
    memo[n] = 1 + golomb(n - golomb(golomb(n - 1, memo), memo), memo);
  }

  return memo[n];
};

// console.log(golomb(10));

// 3. Optimizing 'Unique Paths' from previous chapter. My answer:
// const getPathNum = (col, row) => {
//   if (col === 1 || row === 1) {
//     return 1;
//   }
//   return getPathNum(col - 1, row) + getPathNum(col, row - 1);
// };

const getPathNum = (col, row, memo = {}) => {
  if (col === 1 || row === 1) {
    return 1;
  }

  if (!memo[[col, row]]) {
    memo[[col, row]] =
      getPathNum(col - 1, row, memo) + getPathNum(col, row - 1, memo);
  }

  return memo[[col, row]];
};

console.log(getPathNum(3, 3));
