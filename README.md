# Data Structure and Algorithm

This repo is created as a record of notes and exercises I have completed for studying Data Structure and Algorithm. I use the following resources together and they complement each other during my study.

Resources:

- [A Common-Sense Guide to Data Structure and Algorithms](https://www.amazon.com/Common-Sense-Guide-Structures-Algorithms-Second/dp/1680507222/ref=sr_1_3?keywords=a+common+sense+guide+to+data+structures+and+algorithms&qid=1644931994&sprefix=a+common%2Caps%2C91&sr=8-3)
- [Master the Coding Interview: Data Structures + Algorithms](https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/)

**UPDATE 02/15/2022**: initial commit.

### Ch.1 Why Data Structures Matter

**Main concepts**

1. Measures of code quality: 1) code maintainability; 2) code efficiency

2. Data structures refer to how data is organized.

3. Read, search , insert, delete.

4. Time complexity, speed, efficiency, performance, runtime: all refer to number of steps a given operation takes.

5. Set: a data structure that does NOT allow duplicate values to be contained within it.

### Ch.2 Why Algorithms Matter

**Main concepts**

1. Algorithm: a set of instructions for completing a specific task.

2. Ordered Array: values should be kept in order \*remain sorted. Slower insertion, much faster search.

3. Linear search vs. Binary search: binary search is only possible within an ordered array.

### Ch.3 O Yes! Big O Notation

**Main concepts**

1. Soul of Big O: How many steps an algorithm takes; Also, how the number of steps increase as the data changes.

2. Same algorithm has different efficiency, i.e. linear search in best O(1), in worst O(N).

3. Big O generally refers to the worst-case scenario unless specified. i.e. linear search is O(N).

4. O(log N): time complexity of log time - increases one step each time the data is double.

### Ch.4 Speeding up your code with Big O

**Main concepts**

1. Bubble Sort: O(N^2)

2. Nested loop, often, O(N^2).

### Ch.5 Optimizing code with and without Big O

**Main concepts**

1. Selection Sort: O(N^2/2), in reality, O(N^2). Twice faster than Bubble Sort

2. Big O Notation ignores constants. \* Drop the regular numbers. Focus more on the number of times the loop runs, rather than the exact details of what happens within the loop.

### Ch.6 Optimizing for optimistic scenarios

**Main concepts**

1. Insertion Sort: worst: O(N^2); average: O(N^2/2); best: O(N)

2. Big O Notation only **takes into account the highest order of N** when we have multiple orders added together.

3. In the real world, **average scenarios** are what occur most of the time.
