'Use strict';

// Book Exercises (Accuracy: x/x xxx%)
// 1. My answer:
const getIntersectionOfTwoArrays = (array1, array2) => {
  // 1. DECLARE VARIABLES
  let intersectionArray = [],
    largerArray,
    smallerArray;

  if (array1.length >= array2.length) {
    largerArray = array1;
    smallerArray = array2;
  } else {
    largerArray = array2;
    smallerArray = array1;
  }

  // 2. HASH LARGER ARRAY
  let hashedLargerArray = {};
  for (item of largerArray) {
    hashedLargerArray[item] = true;
  }

  // 3. COMPARE EACH ITEM IN SHORTER ARRAY TO LARGER ARRAY
  for (item of smallerArray) {
    // 1) IF EXISTS, THEN PUSH TO INTERSECTION ARRAY
    if (hashedLargerArray[item]) intersectionArray.push(item);
    // 2) IF NOT, DO NOTHING
  }

  // 4. RETURN INTERSECTION ARRAY
  return intersectionArray;
};
// TEST
// getIntersectionOfTwoArrays([1, 2, 3, 4, 5], [0, 2, 4, 6, 8]);
// -> [2,4]

// 2. My answer:
const getDuplicateValue = array => {
  let hashedArray = {};
  // HASH THIS ARRAY
  // 1. CHECK IF KEY ALREADY EXISTS
  for (item of array) {
    // 1) IF EXISTS, RETURN KEY
    if (hashedArray[item]) {
      return item;
    }
    // 2) IF NOT, ADD KEY TO HASHED ARRAY
    hashedArray[item] = true;
  }
  // RETURN NULL:NO DUPLICATE VALUE EXISTS IN THIS ARRAY
  return null;
};

// getDuplicateValue(['a', 'b', 'c', 'd', 'c', 'e', 'f']);

// 3. My answer:
const returnMissingLetter = string => {
  // 1. DECLARE VARIABLES
  // prettier-ignore
  const TWENTY_SIX_LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const hashedString = {};
  const missingLetters = [];

  // 2. HASH STRING
  for (char of string) {
    if (char !== ' ' && !hashedString[char]) hashedString[char] = true;
  }

  // 3. CHECK 26 ALPHABET WITH HASHED STRING
  for (letter of TWENTY_SIX_LETTERS) {
    // 1) IF NOT EXISTS, ADD TO MISSING LETTERS
    if (!hashedString[letter]) missingLetters.push(letter);
    // 2) IF EXISTS, DO NOTHING
  }

  // 4. RETURN RESULT
  return missingLetters;
};

// returnMissingLetter('the quick brown box jumps over a lazy dog');

// 4. My answer:
const getNonDuplicatedChar = string => {
  // 1. DECLARE VARIABLES
  const hashedString = {};

  // 2. HASH STRING
  for (char of string) {
    // 1) IF CHAR ALREADY EXISTS, UPDATE VALUE TO DUPLICATE
    if (hashedString[char]) hashedString[char] = 'DUPLICATE';
    // 2) IF NOT EXISTS, ADD VALUE TRUE
    if (!hashedString[char]) hashedString[char] = true;
  }

  // 3. LOOP HASHED STRING
  for (char of string) {
    if (hashedString[char] !== 'DUPLICATE') {
      console.log(char);
      return char;
    }
  }
};

// getNonDuplicatedChar('minimum');
