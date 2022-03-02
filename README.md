# Data Structure and Algorithm

This repo is created as a record of notes and exercises I have completed for studying Data Structure and Algorithm. I use the following resources together and they complement each other during my study.

Resources:

- [A Common-Sense Guide to Data Structure and Algorithms](https://www.amazon.com/Common-Sense-Guide-Structures-Algorithms-Second/dp/1680507222/ref=sr_1_3?keywords=a+common+sense+guide+to+data+structures+and+algorithms&qid=1644931994&sprefix=a+common%2Caps%2C91&sr=8-3)
- [Master the Coding Interview: Data Structures + Algorithms](https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/)

**UPDATE 02/25/2022**: Complete first 10 chapters.

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

### Ch.10 Recursively Recurse with Recursion

1. Recursion: a function calling itself; In almost any case in which you can use a loop, you can also use recursion; Recursion is a tool that allows for writing elegant code.

2. Base Case: every recursive function needs at least one base case to prevent it from calling itself indefinitely.

3. How to read / write: 1) Starting analysis from the **base case** and building up is a great way to reason about recursive code.

4. How computer works with recursion? Call Stack; Stack Overflow: there is simply no more room in the short-term memory to hold all this data.

### Ch.11 Learning to Write in Recursive

1. Recursive Category: **repeatedly execute** a task

2. **in-place** modification: the function actually changes the original array passed into function.

3. Recursive trick: passing extra parameters

4. Recursive Category: **calculations** - performing a calculation based on a subproblem

5. Subproblem: a version of the very same problem applied to a smaller input, i.e. factorial(5) is a subproblem of factorial(6)

6. How to Top-Down recursion: 1) imagine the function you're writing has already been implemented by someone else; 2) identify the subproblem of the problem; 3) see what happens when you call the function on the subproblem and go from there

7. Factorial Time: O(N!)

### Ch.12 Dynamic Programming

1. Subproblem: when a problem is solved by solving smaller versions of the same problem. The smaller problem is called a subproblem.

2. Overlapping Subproblem: subproblems overlapping, calling many of the same functions as each other.

3. Dynamic Programming: process of optimizing recursive problems that have overlapping subproblems.

4. Two techniques:
   (1) momoization: reducing recursive calls by remembering previously computed functions;
   (2) bottom-up: ditch recursion and use some other approach (like a loop) to solve the same problem.

### Ch.13 Recursive Algorithms for Speed

1. **Quicksort**: An extremely fast sorting algorithm that is particularly efficient for average scenarios. The built-in sorting algorithm is employed under the hood - Quicksort \* in average-scenario, Quicksort is better than Insertion Sort.

2. Partitioning: O(N)

3. Quicksort big O: 0(N*logN) *average scenario; O(N^2) \*worst-case scenario

4. Quickselect: a hybrid of Quicksort and Binary search. We can find the correct value without having to sort the entire array. O(N)

5. The fastest sorting algorithm is O(NlogN); Plenty of algorithms employ sorting as part of a larger process, at least O(N\*logN).

### Ch.14 Node-based Data Structure

1. Nodes: connected data that is dispersed throughout the computer's memory.

2. Linked list: a list of notes; each node comes with a little extra information (\*link), namely, the memory address of the next node in the list; each node consists of two memory cells (actual data + link); The final node's link contains null; The first node refers to head, the final node refers to tail.

3. **Linked list**'s data can be spread throughout the computer's memory vs. **Array** needs to find an entire block of contiguous cells to store its data.

4. Read: O(N); Search: O(N); **Insertion**: Average - O(N), Best, at the beginning of the list - O(1); **Deletion**: Average - O(N), Best, at the beginning of the list - O(1)

5. Linked list is an amazing data structure for moving through an entire list while making insertions or deletions, as we never have to worry about shifting other data.

6. Doubly Linked List: each node has two links; move both forward and backward through the list. O(1) for both inserting at the end and for deleting from the beginning. A perfect fit for serving as the queue's underlying data structure.

### Ch.15 Binary Search Trees

1. Tree: also, a node-based data structure, but within a tree, each node can have links to multiple nodes.

2. **root**: top node of the tree; **descendants**/**ancestors**; **levels**; **balanced** \*property of a tree

3. Binary Tree: a tree in which each node has zero, one, or two children;

4. Binary Search Tree: (1) Each node can have at most one 'left' child and one 'right' child; (2) A node's 'left' descendants can only contain values that are less than the node itself. A node's 'right' descendants can only contain values that are greater than the node itself.

5. Searching: O(logN); A balanced tree with N nodes will have log(N) levels.

6. Insertion: O(logN)

7. Deletion: if node being deleted has no children... /has one child... /has two children.../ successor node has a right child...

8. Traverse the data structure: (1) inorder travesal: O(N), visi all N nodes of the tree; (2) preorder traversal (3) postorder traversal
