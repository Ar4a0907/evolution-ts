export type CompareFn<T> = (a: T, b: T) => number

export function mergeSort<Type>(array: Type[], compareFunction: CompareFn<Type>): Type[] {
  if (array.length <= 1)
    return array

  const middle = Math.floor(array.length / 2)
  const leftArray = array.slice(0, middle)
  const rightArray = array.slice(middle)

  return merge(mergeSort(leftArray, compareFunction), mergeSort(rightArray, compareFunction))
}

function merge<Type>(left: Type[], right: Type[]) {
  const resultArray = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex])
      leftIndex++
    } else {
      resultArray.push(right[rightIndex])
      rightIndex++
    }
  }

  return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}