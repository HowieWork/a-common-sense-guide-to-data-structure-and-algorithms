'Use strict';

// NOTE Code Implementation: REFER TO EXERCISE FOR JS IMPLEMENTATION

// Book Exercises (Accuracy: x/x xxx%)
// 1. My answer:
/*
   1
     5   
   2     9
    4  6   10
   3     8
*/

// 2. My answer: 10

// 3. My answer:
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // LEFT
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // RIGHT
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {}

  // 3. MY ANSWER:
  getGreatest() {
    let currentNode = this.root;
    while (true) {
      if (currentNode.right) {
        currentNode = currentNode.right;
      } else {
        return currentNode.value;
      }
    }
  }

  // IN-ORDER TRAVERSE: PRINT ALL ITEMS IN ALPHABET ORDER

  // remove
}

// TESTING 1:
const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// RETURN BINARY TREE
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

// JSON.stringify(traverse(tree.root));
// console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree.getGreatest());

// TESTING 2: BOOK LIST
const bookTree = new BinarySearchTree();

bookTree.insert('Moby Dick');
bookTree.insert('Great Expectations');
bookTree.insert('Alice in Wonderland');
bookTree.insert('Lord of the Flies');
bookTree.insert('Robinson Crusoe');
bookTree.insert('Pride and Prejudice');
bookTree.insert('The Odyssey');

// console.log(JSON.stringify(traverse(bookTree.root)));

// NOTE INORDER TRAVERSE: PRINT OUT ALL ITEMS OF BINARY TREE IN ALPHABETIC ORDER
function inOrderTraverse(node) {
  if (node !== null) {
    inOrderTraverse(node.left);
    if (node.value !== null) {
      console.log(node.value);
    } else {
      return;
    }
    inOrderTraverse(node.right);
  }
}
// inOrderTraverse(bookTree.root);

// NOTE PREORDER TRAVERSE:
function preOrderTraverse(node) {
  if (node !== null) {
    if (node.value !== null) {
      console.log(node.value);
    } else {
      return;
    }
    preOrderTraverse(node.left);
    preOrderTraverse(node.right);
  }
}
// preOrderTraverse(bookTree.root);

// 4. My answer:
// Moby Dick
// Great Expectations
// Alice in Wonderland
// Lord of the Flies
// Robinson Crusoe
// Pride and Prejudice
// The Odyssey

// NOTE POSTORDER TRAVERSE:
function postOrderTraverse(node) {
  if (node !== null) {
    postOrderTraverse(node.left);
    postOrderTraverse(node.right);
    if (node.value !== null) {
      console.log(node.value);
    } else {
      return;
    }
  }
}
postOrderTraverse(bookTree.root);

// 5. My answer:
// Alice in Wonderland
// Lord of the Flies
// Great Expectations
// Pride and Prejudice
// The Odyssey
// Robinson Crusoe
// Moby Dick
