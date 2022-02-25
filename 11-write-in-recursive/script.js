'Use strict';

// NOTE 1. Array Sum
const sumArray = array => {
  if (array.length === 1) return array[0];
  return sumArray(array.slice(1)) + array[0];
};
// console.log(sumArray([1, 2, 3]));

// NOTE 2. String Reversal
const reverseString = string => {
  if (string.length === 1) return string[0];
  return reverseString(string.substring(1, string.length)) + string[0];
};
// console.log(reverseString('abcde'));

// NOTE 3. Counting X
const countingX = string => {
  // BASE CASE
  if (string.length === 1) return string[0] === 'x' ? 1 : 0;

  let numOfX = countingX(string.substring(1, string.length));
  if (string[0] === 'x') numOfX += 1;
  return numOfX;
};
// console.log(countingX('axbxcxd'));

// NOTE 4. The Staircase Problem
// How many possible paths for a person, with ability of climbing 1,2,3 stairs at a time, to climb a stair with N number of steps?
const possibleNumOfPaths = numOfStairs => {
  // BASE CASE
  if (numOfStairs <= 3) {
    switch (numOfStairs) {
      case 3:
        return 4;
      case 2:
        return 2;
      case 1:
        return 1;
      default:
        break;
    }
  }

  return (
    possibleNumOfPaths(numOfStairs - 1) +
    possibleNumOfPaths(numOfStairs - 2) +
    possibleNumOfPaths(numOfStairs - 3)
  );
};
// console.log(possibleNumOfPaths(10));

// NOTE 5. Anagram Generation
const anagramsGenerator = string => {
  // BASE CASE
  if (string.length === 1) return [string[0]];

  let anagramsArray = [];
  let subAnagramsArray = anagramsGenerator(string.substring(1, string.length));

  for (let i = 0; i < subAnagramsArray.length; i++) {
    // FOR EACH ITEM IN THIS SUB ANAGRAMS ARRAY, LOOP AGAIN!
    for (let j = 0; j < subAnagramsArray[i].length + 1; j++) {
      // INSERT THE FIRST CHAR OF PROVIDED STRING: string[0]
      const newString =
        subAnagramsArray[i].slice(0, j) +
        string[0] +
        subAnagramsArray[i].slice(j);
      anagramsArray.push(newString);
    }
  }

  return anagramsArray;
};

// console.log(anagramsGenerator('abc'));

// Book Exercises (Accuracy: x/x xxx%)
// 1. My answer:
const getNumOfChar = array => {
  let numOfChar;

  // BASE CASE
  if (array.length === 1) {
    numOfChar = array[0].length;
    return numOfChar;
  }

  // SUBPROBLEM
  numOfChar = array[0].length + getNumOfChar(array.slice(1, array.length));

  return numOfChar;
};
// console.log(getNumOfChar(['ab', 'c', 'def']));

// 2. My answer:
const getEvenNums = array => {
  let evenNums = [];

  // BASE CASE
  if (array.length === 1) {
    return array[0] % 2 === 0 ? array : [];
  }

  // SUBPROBLEM
  evenNums = getEvenNums(array.slice(1));

  if (array[0] % 2 === 0) {
    evenNums.unshift(array[0]);
  }

  // RETURN AN ARRAY OF EVEN NUMBERS
  return evenNums;
};

// console.log(getEvenNums([1, 2, 3, 4, 6]));

// 3. 'Triangular Numbers' My answer:
const getTriangularNum = n => {
  let triangularNum;

  // BASE CASE
  if (n === 1) {
    triangularNum = 1;
  }

  // SUBPROBLEM
  if (n > 1) {
    triangularNum = getTriangularNum(n - 1) + n;
  }

  return triangularNum;
};
// console.log(getTriangularNum(4));

// 4. My answer:
const getIndexOfFirstX = string => {
  // BASE CASE
  if (string.length === 1) {
    return string[0] === 'x' ? 0 : null;
  }

  // SUBPROBLEM
  if (string[0] === 'x') {
    return 0;
  } else {
    return getIndexOfFirstX(string.slice(1, string.length)) + 1;
  }
};

// console.log(getIndexOfFirstX('dabxcd'));

// 5. 'Unique Paths' My answer:
const getPathNum = (col, row) => {
  // BASE CASE
  if (col === 1 || row === 1) {
    return 1;
  }

  // SUBPROBLEM
  return getPathNum(col - 1, row) + getPathNum(col, row - 1);
};

// console.log(getPathNum(3, 3));
