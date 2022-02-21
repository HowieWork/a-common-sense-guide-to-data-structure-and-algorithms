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

### Ch.7 Big O in Everyday Code

**Main concepts**

1. Pay attention to what is Big O of these two cases on book: Clothing Labels, Count the Ones.

2. O(2^N) is slower than O(N^3) at a point. In a certain sense, O(2^N) is the opposite of O(log N).

### Ch.8 Blazing fast lookup with Hash Tables

1. Hash table: (1) A list of paired values; (2) Look up data in O(1); (3) A hash function must convert the same string to the same number every single time it's applies;

2. One directional lookups

3. Collision: trying to add data to a cell that is already filled is known as a collision

4. Separate Chaining: Way to handle collisions.

5. Hash Tables' efficiency depends on three factors: 1) How much data we're storing in the hash table; 2) How many cells are available in the hash table; 3) Which hash function we're using \* A good hash function is one that distributes its data across all available cells. The more we can spread out our data, the fewer collisions we will have.

6. A good hash table: strikes a balance of avoiding collisions while not consuming lots of memory. '7 data 10 cells' rule; **Load Factor**: 0.7

7. 'Using it as an index' to optimize codes

### Ch.9 Crafting Elegant Code with Stacks and Queues

1. Stack: LIFO; vertical, top/bottom; **Pushing on** / **Popping from** the stack

2. 'a constrained version of an array', what advantages? 1) Prevent potential bugs; 2) A new mental model for tackling problems \*LIFO mindset

3. Queue: FIFO; horizontal, front/back; **Enqueue** / **Dequeue**

4. Abstract data type: A set of theoretical rule that revolve around some other built-in data structure, i.e. set, stack, queue ...
