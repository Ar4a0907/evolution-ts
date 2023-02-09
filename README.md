# Data Structures

**Deadline: 22/02/2023 00:00 CET**

## Task description

Your task is to develop several **data structure** algorithms. \
Add your solutions and replace `fake-imports` in test files
with actual imports of your implementation.

## Requirements

- Implement `BinaryTree` interface.
- Develop `BinaryTree` class that implements `BinaryTree` interface.
- `BinaryTree` class should be a generic class that can define node type.
- Implement `BinarySearchTree` interface that extends `BinaryTree` interface.
- Develop `BinarySearchTree` class that implements `BinarySearchTree` interface
  and extends `BinaryTree` class.
- `BinarySearchTree` should not be a generic and should have numeric node values.
- Develop `mergeSort` function.
- Define all the types and access modifiers.
- Make all of the tests pass.
- Delete `fake-imports` file.

Any visualization of the algorithms is not required, but if you have strong
will to use React and implement your ideas, you are very welcome to do so.

### Binary Tree & Binary Search Tree requirements

Pseudo-interfaces of `BinaryTree` and `TreeNode`:

```ts
TreeNode {
    value: TreeNodeValue;
    left: TreeNode;
    right: TreeNode;
}

BinaryTree {
    constructor(tree: TreeNode): void;

    /**
     * Depth-First Search (DFS) - inorder, preorder, postorder
     * Breadth-First Search (BFS) - breadth
     */
    traverse(traverseType): TreeNodeValue[];

    getColumn(columnOrder: number): TreeNodeValue[];
}
```

Pseudo-interface of `BinarySearchTree`:

```
BinarySearchTree {
    has(value: number): boolean;
}
```

- `TreeNode` has to be a generic interface.

- `traverseType` has to be set of constants with 4 values (3 of DFS and 1 of BFS).

- `traverse` method has to return an array of values in order according to
  `traverseType`.

- `getColumn` method has to return an array of values in a particular column.
  `0` column is all elements under the root (including root). Every step to the
  right means +1 to the column order, every step to the left means -1 to the
  column order. The return array should include values in ascending order.

Pay attention to visualization of what is the column:
![BST_columns](./assets/BST_columns.png 'Binary Search Tree columns')

All other additional methods and ideas to implement
in `BinaryTree` or `BinarySearchTree` are up to you.

### Merge sort requirements

Pseudo-interface of `mergeSort`:

```
CompareFunction = (a: ValueType, b: ValueType) => number

MergeSort = (array: ValueType[], compareFunction: CompareFunction) => ValueType[]
```

Develop the `mergeSort` function that implements a merge sort algorithm
(`O(n log n)`) and returns a new array of sorted values according to
`compareFunction`.

`compareFunction` works the same way as here
[described](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description).

The `mergeSort` function has to be a generic and able to recognize the values of
the passed array automatically.
## Submitting your solution

Please push your changes to the `main branch` of this repository. You can push one or more commits. <br>

Once you are finished with the task, please click the `Submit Solution` link on <a href="https://app.codescreen.com/candidate/d6480098-49dc-4527-bcff-7f48ae6ae74c" target="_blank">this screen</a>.