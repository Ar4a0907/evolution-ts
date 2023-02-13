export interface TreeNode<Type> {
  value: Type
  left?: TreeNode<Type>
  right?: TreeNode<Type>
}

export enum Traverse {
  DFS_INORDER,
  DFS_PREORDER,
  DFS_POSTORDER,
  BFS
}

export interface BinaryTreeInterface<Type> {
  getColumn(columnOrder: number): Type[];
  traverse(TraverseType: Traverse, callback: any): void;
}

function assertNever(arg: never): never {
  throw new Error(`Unexpected argument: ${arg}`)
}

export class BinaryTree<Type> implements BinaryTreeInterface<Type> {
  protected tree: TreeNode<Type>

  constructor(tree: TreeNode<Type>) {
    this.tree = tree
  }

  getColumn(columnOrder: number): Type[] {
    const values: Type[] = []

    function getColumnValues(node: TreeNode<Type> | undefined, column = 0) {
      if (!node)
        return

      if (column === columnOrder)
        values.push(node.value)

      getColumnValues(node.left, column - 1)
      getColumnValues(node.right, column + 1)
    }

    getColumnValues(this.tree)

    return values
  }

  traverse(TraverseType: Traverse, callback: any): void {
    switch (TraverseType) {
      case Traverse.BFS:
        this.BFS(this.tree, callback)
        return
      case Traverse.DFS_INORDER:
        this.inOrderDFS(this.tree, callback)
        return
      case Traverse.DFS_POSTORDER:
        this.postOrderDFS(this.tree, callback)
        return
      case Traverse.DFS_PREORDER:
        this.preOrderDFS(this.tree, callback)
        return

      default:
        return assertNever(TraverseType)
    }
  }

  protected BFS(node: TreeNode<Type>, callback: any): void {
    const queue: TreeNode<Type>[] = [node];

    while (queue.length) {
      const currentNode = queue.shift();
      if(!currentNode)
        continue

      callback(currentNode)

      if (currentNode.left)
        queue.push(currentNode.left)

      if (currentNode.right)
        queue.push(currentNode.right)
    }
  }

  protected inOrderDFS(node: TreeNode<Type>, callback: any): void {

    function inOrderDFSInner(node: TreeNode<Type> | undefined) {
      if (!node)
        return

      inOrderDFSInner(node.left)
      callback(node)
      inOrderDFSInner(node.right)
    }

    inOrderDFSInner(node)
  }

  protected postOrderDFS(node: TreeNode<Type>, callback: any): void {

    function postOrderDFSInner(node: TreeNode<Type> | undefined) {
      if (!node)
        return

      postOrderDFSInner(node.left)
      postOrderDFSInner(node.right)
      callback(node)
    }

    postOrderDFSInner(node)
  }

  protected preOrderDFS(node: TreeNode<Type>, callback: any): void {

    function preOrderDFSInner(node: TreeNode<Type> | undefined) {
      if (!node)
        return

      callback(node)
      preOrderDFSInner(node.left)
      preOrderDFSInner(node.right)
    }

    preOrderDFSInner(node)
  }
}
