import { BinarySearchTree } from 'fake-imports'

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

describe('binary search tree', () => {
  describe('#has', () => {
    it.each([
      [10, true],
      [5, true],
      [3, true],
      [7, true],
      [15, true],
      [20, true],
      [17, true],
      [50, true],
      [11, false],
      [100, false],
      [-5, false],
    ])('checks if element exists in the tree', (element, result) => {
      const tree = new BinarySearchTree(stubTreeRoot)
      expect(tree.has(element)).toBe(result)
    })
  })
})
