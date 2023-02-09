import { CompareFn, mergeSort } from 'fake-imports'

const compareNumbers: CompareFn<number> = (a, b) => (a < b ? -1 : a === b ? 0 : 1)
const compareStrings: CompareFn<string> = (a, b) => a.localeCompare(b) as -1 | 0 | 1

describe('mergeSort', () => {
  it('sort numbers correctly', () => {
    expect(mergeSort([], compareNumbers)).toEqual([])
    expect(mergeSort([1], compareNumbers)).toEqual([1])
    expect(mergeSort([1, 2], compareNumbers)).toEqual([1, 2])
    expect(mergeSort([2, 1], compareNumbers)).toEqual([1, 2])
    expect(mergeSort([10, 2, 3, 1], compareNumbers)).toEqual([1, 2, 3, 10])
    expect(mergeSort([3, 4, 2, 1, 7, 5, 8, 9, 0, 6], compareNumbers)).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    ])
  })

  it('sort strings correctly', () => {
    expect(mergeSort('dbacfe'.split(''), compareStrings)).toEqual('abcdef'.split(''))

    expect(
      mergeSort(
        [
          'the',
          'worst',
          'thing',
          'about',
          'prison',
          'was',
          'the',
          'dementors.',
          'they',
          'were',
          'flying',
          'all',
          'over',
          'the',
          'place',
          'and',
          'they',
          'were',
          'scary',
          'and',
          "they'd",
          'come',
          'down',
          'and',
          "they'd",
          'suck',
          'the',
          'soul',
          'out',
          'of',
          'your',
          'body',
          'and',
          'it',
          'hurt!',
        ],
        compareStrings,
      ),
    ).toEqual([
      'about',
      'all',
      'and',
      'and',
      'and',
      'and',
      'body',
      'come',
      'dementors.',
      'down',
      'flying',
      'hurt!',
      'it',
      'of',
      'out',
      'over',
      'place',
      'prison',
      'scary',
      'soul',
      'suck',
      'the',
      'the',
      'the',
      'the',
      'they',
      'they',
      "they'd",
      "they'd",
      'thing',
      'was',
      'were',
      'were',
      'worst',
      'your',
    ])
  })
})
