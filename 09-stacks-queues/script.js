'Use strict';

// Book Exercises (Accuracy: 4/4 100%)
// 1. My answer: queue
// 2. My answer: 4
// 3. My answer: 3
// 4. My answer:
const reverseString = string => {
  // 1. DECLARE VARIABLES: STACK, REVERSED STRING
  let stack = [];
  let reversedString = '';

  // 2. LOOP CHAR OF STRING
  for (char of string) stack.push(char);
  const popTimes = stack.length;

  // 3. POP STACK TO FORM REVERSED STRING
  for (let i = 0; i < popTimes; i++) {
    reversedString += stack.pop();
  }

  return reversedString;
};

// reverseString('abcde');
