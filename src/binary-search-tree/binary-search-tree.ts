import { BinaryTree, BinaryTreeInterface, TreeNode } from '../binary-tree/binary-tree'

interface BinarySearchTreeInterface extends BinaryTreeInterface<number> {
  has(target: number, node: TreeNode<number>): boolean
}

export class BinarySearchTree extends BinaryTree<number> implements BinarySearchTreeInterface {

  has(target: number, node = this.tree): boolean {
    if (!node)
      return false

    if (node.value === target)
      return true

    if (node.value < target) {
      if (!node.right)
        return false
      return this.has(target, node.right)
    } else {
      if (!node.left)
        return false
      return this.has(target, node.left)
    }
  }
}