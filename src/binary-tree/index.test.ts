import { BinaryTree, Traverse } from 'fake-imports'

const stubTreeRoot = {
  value: 10,
  left: {
    value: 5,
    left: { value: 3 },
    right: { value: 7 },
  },
  right: {
    value: 15,
    right: {
      value: 20,
      left: { value: 17 },
      right: { value: 50 },
    },
  },
}

const expectNode = (value: number) => expect.objectContaining({ value })

describe('Binary tree', () => {
  describe('#traverse', () => {
    it('traverse tree in DFS_INORDER mode', () => {
      const tree = new BinaryTree(stubTreeRoot)
      const callback = jest.fn()

      tree.traverse(Traverse.DFS_INORDER, callback)

      expect(callback).toHaveBeenNthCalledWith(1, expectNode(3))
      expect(callback).toHaveBeenNthCalledWith(2, expectNode(5))
      expect(callback).toHaveBeenNthCalledWith(3, expectNode(7))
      expect(callback).toHaveBeenNthCalledWith(4, expectNode(10))
      expect(callback).toHaveBeenNthCalledWith(5, expectNode(15))
      expect(callback).toHaveBeenNthCalledWith(6, expectNode(17))
      expect(callback).toHaveBeenNthCalledWith(7, expectNode(20))
      expect(callback).toHaveBeenNthCalledWith(8, expectNode(50))
    })

    it('traverse tree in DFS_PREORDER mode', () => {
      const tree = new BinaryTree(stubTreeRoot)
      const callback = jest.fn()

      tree.traverse(Traverse.DFS_PREORDER, callback)

      expect(callback).toHaveBeenNthCalledWith(1, expectNode(10))
      expect(callback).toHaveBeenNthCalledWith(2, expectNode(5))
      expect(callback).toHaveBeenNthCalledWith(3, expectNode(3))
      expect(callback).toHaveBeenNthCalledWith(4, expectNode(7))
      expect(callback).toHaveBeenNthCalledWith(5, expectNode(15))
      expect(callback).toHaveBeenNthCalledWith(6, expectNode(20))
      expect(callback).toHaveBeenNthCalledWith(7, expectNode(17))
      expect(callback).toHaveBeenNthCalledWith(8, expectNode(50))
    })

    it('traverse tree in DFS_POSTORDER mode', () => {
      const tree = new BinaryTree(stubTreeRoot)
      const callback = jest.fn()

      tree.traverse(Traverse.DFS_POSTORDER, callback)

      expect(callback).toHaveBeenNthCalledWith(1, expectNode(3))
      expect(callback).toHaveBeenNthCalledWith(2, expectNode(7))
      expect(callback).toHaveBeenNthCalledWith(3, expectNode(5))
      expect(callback).toHaveBeenNthCalledWith(4, expectNode(17))
      expect(callback).toHaveBeenNthCalledWith(5, expectNode(50))
      expect(callback).toHaveBeenNthCalledWith(6, expectNode(20))
      expect(callback).toHaveBeenNthCalledWith(7, expectNode(15))
      expect(callback).toHaveBeenNthCalledWith(8, expectNode(10))
    })

    it('traverse tree in BFS mode', () => {
      const tree = new BinaryTree(stubTreeRoot)
      const callback = jest.fn()

      tree.traverse(Traverse.BFS, callback)

      expect(callback).toHaveBeenNthCalledWith(1, expectNode(10))
      expect(callback).toHaveBeenNthCalledWith(2, expectNode(5))
      expect(callback).toHaveBeenNthCalledWith(3, expectNode(15))
      expect(callback).toHaveBeenNthCalledWith(4, expectNode(3))
      expect(callback).toHaveBeenNthCalledWith(5, expectNode(7))
      expect(callback).toHaveBeenNthCalledWith(6, expectNode(20))
      expect(callback).toHaveBeenNthCalledWith(7, expectNode(17))
      expect(callback).toHaveBeenNthCalledWith(8, expectNode(50))
    })

    it('throws an error for unexpected traverse type', () => {
      const tree = new BinaryTree(stubTreeRoot)

      expect(() => tree.traverse('Rick Astley' as any, expect.anything)).toThrow()
    })
  })

  describe('#getColumn', () => {
    it('returns column values', () => {
      const tree = new BinaryTree(stubTreeRoot)

      expect(tree.getColumn(0)).toEqual([10, 7])
      expect(tree.getColumn(1)).toEqual([15, 17])
      expect(tree.getColumn(2)).toEqual([20])
      expect(tree.getColumn(-1)).toEqual([5])
      expect(tree.getColumn(-2)).toEqual([3])
    })
  })
})
