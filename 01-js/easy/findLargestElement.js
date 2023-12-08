/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if (numbers.length === 0) {
        return undefined
    }
    let greatestNumber = numbers[0]
    numbers.forEach(num => {
        if (greatestNumber < num) {
            greatestNumber = num
        }
    })
    return greatestNumber
}

module.exports = findLargestElement;