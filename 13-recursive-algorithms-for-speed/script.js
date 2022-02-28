'Use strict';

// Book Exercises (Accuracy: 3/3 100%)
// 1. My answer:
// A POSITIVE ARRAY, RETURN THE GREATEST PRODUCT OF ANY THREE NUMBERS
const getGreatestProduct = array => {
  // O(N*logN)
  const sortedArray = array.slice(0).sort((a, b) => (a < b ? -1 : 1));
  const length = sortedArray.length;
  return (
    sortedArray[length - 1] * sortedArray[length - 2] * sortedArray[length - 3]
  );
};

// 2. My answer:
const getMissingNum = array => {
  const sortedArray = array.slice(0).sort((a, b) => (a < b ? -1 : 1));

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] !== i) return i;
  }
  return null;
};

// console.log(getMissingNum([1, 4, 3, 2, 0, 6]));

// 3. My answer:
// FIND THE GREATEST NUMBER WITHIN AN ARRAY
// O(N^2)
const getGreatestNum_V1 = array => {
  let greatestNum;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] > array[j]) greatestNum = array[i];
    }
  }
  return greatestNum;
};
// console.log(getGreatestNum_V1([1, 2, 3]));

// O(N*logN)
const getGreatestNum_V2 = array => {
  const sortedArray = array.slice(0).sort((a, b) => (a < b ? -1 : 1));
  return sortedArray[sortedArray.length - 1];
};
// console.log(getGreatestNum_V2([1, 2, 3]));

// O(N)
const getGreatestNum_V3 = array => {
  let greatestNum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > greatestNum) greatestNum = array[i];
  }
  return greatestNum;
};
// console.log(getGreatestNum_V3([1, 2, 3]));
