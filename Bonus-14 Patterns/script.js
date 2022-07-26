'Use strict';

// NOTE 1. Sliding Window
// 🎉 1343: Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
// T: O(n) / S: O(1)
var numOfSubarrays = function (arr, k, threshold) {
  // 1. Find the first Kth integers
  // 2. Declare counter for qualified array
  // 3. Loop through input array until the end
  // *For each sub-array
  // 3.1 Calculate average
  // 3.2 Compare average with threshold, update counter accordingly
  // 4. Return counter

  let startIdx = 0;
  let endIdx = k - 1;
  let counter = 0;

  let totalSubArr = arr
    .slice(startIdx, endIdx + 1)
    .reduce((pre, cur) => pre + cur, 0);

  if (totalSubArr / k >= threshold) counter += 1;

  startIdx += 1;
  endIdx += 1;

  while (endIdx < arr.length) {
    totalSubArr = totalSubArr + arr[endIdx] - arr[startIdx - 1];

    if (totalSubArr / k >= threshold) counter += 1;
    startIdx += 1;
    endIdx += 1;
  }

  return counter;
};

// testing samples
// console.log(numOfSubarrays([1, 1, 1, 1, 1], 1, 0));
// console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));

// 🎉 2. Longest Substring with max K distinct
// T: O(n+n) -> O(n) *n is the total number of characters in the input string
// S: O(k+1) -> O(k) *we will be storing a max of K+1 characters in the HashMap.
const longest_substring_with_k_distinct = function (str, k) {
  let windowStart = 0;
  let maxLength = 0;
  const distinctChars = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in distinctChars)) {
      distinctChars[rightChar] = 1;
    } else {
      distinctChars[rightChar] += 1;
    }

    while (Object.keys(distinctChars).length > k) {
      const leftChar = str[windowStart];
      distinctChars[leftChar]--;
      if (distinctChars[leftChar] === 0) {
        delete distinctChars[leftChar];
      }
      windowStart++;
    }

    maxLength =
      maxLength > windowEnd - windowStart + 1
        ? maxLength
        : windowEnd - windowStart + 1;
  }

  return maxLength;
};

// testing samples
// console.log(longest_substring_with_k_distinct('araaci', 2)); // 4
// console.log(longest_substring_with_k_distinct('araaci', 1)); // 2
// console.log(longest_substring_with_k_distinct('cbbebi', 3)); // 5
// console.log(longest_substring_with_k_distinct('cbbebi', 10)); // 6

// 💥 🎉 438. Find All Anagrams in a String
var findAnagrams = function (s, p) {
  const result = [];
  const distinctChars = new Map();
  for (const char of p) {
    if (distinctChars.get(char)) distinctChars.get(char).count++;
    else distinctChars.set(char, { count: 1 });
  }

  let windowStart = 0;
  for (let windowEnd = p.length - 1; windowEnd < s.length; windowEnd++) {
    let isAnagram = true;
    const subChars = new Map();
    for (let i = windowStart; i < windowEnd + 1; i++) {
      if (!distinctChars.get(s[i])) {
        isAnagram = false;
        break;
      }
      // Substring char count
      if (subChars.get(s[i])) subChars.get(s[i]).count++;
      else subChars.set(s[i], { count: 1 });
    }
    if (subChars.size !== distinctChars.size) isAnagram = false;
    for (const subChar of subChars) {
      const key = subChar[0];
      if (!distinctChars.get(key)) isAnagram = false;
      if (distinctChars.get(key).count !== subChars.get(key).count)
        isAnagram = false;
    }

    isAnagram && result.push(windowStart);
    windowStart++;
  }

  return result;
};

// testing samples
// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
console.log(findAnagrams('cbaebabacd', 'abc'));
// Input: s = "abab", p = "ab"
// Output: [0,1,2]
console.log(findAnagrams('abab', 'ab'));
console.log(findAnagrams('baa', 'aa')); // [1]
console.log(findAnagrams('ababababab', 'aab')); // [0,2,4,6]

//////////////////////////////////////////
// NOTE 2. Sliding Window
//////////////////////////////////////////
// NOTE 3. Sliding Window
//////////////////////////////////////////
// NOTE 4. Sliding Window
//////////////////////////////////////////
// NOTE 5. Sliding Window
//////////////////////////////////////////
// NOTE 6. Sliding Window
//////////////////////////////////////////
// NOTE 7. Sliding Window
//////////////////////////////////////////
// NOTE 8. Sliding Window
//////////////////////////////////////////
// NOTE 9. Sliding Window
//////////////////////////////////////////
// NOTE 10. Sliding Window
//////////////////////////////////////////
// NOTE 11. Sliding Window
//////////////////////////////////////////
// NOTE 12. Sliding Window
//////////////////////////////////////////
// NOTE 13. Sliding Window
//////////////////////////////////////////
// NOTE 14. Sliding Window
