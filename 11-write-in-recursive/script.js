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
function generateAnagrams(word) {
  if (word.length < 2) {
    return [word];
  } else {
    let anagrams = [];
    let before, focus, after;
    let shortWord, subAnagrams, newEntry;

    for (let i = 0; i < word.length; i++) {
      before = word.slice(0, i);
      focus = word[i];
      after = word.slice(i + 1, word.length + 1);
      shortWord = before + after;
      subAnagrams = generateAnagrams(shortWord);

      for (let j = 0; j < subAnagrams.length; j++) {
        newEntry = focus + subAnagrams[j];
        anagrams.push(newEntry);
      }
    }

    return anagrams;
  }
}

// console.log(generateAnagrams('abc'));

/*
const anagramsGenerator = string => {
  // BASE CASE
  if (string.length === 1) return [string[0]];

  let anagramsArray = [];
  let subAnagramsArray = anagramsGenerator(string.substring(1, string.length));

  for (let i = 0; i < subAnagramsArray.length; i++) {
    // FOR EACH ITEM IN THIS SUB ANAGRAMS ARRAY, LOOP AGAIN!
  }
};
*/

// Book Exercises
// X. My answer: (Accuracy: x/x xxx%)
