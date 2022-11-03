const analyzeArray = require('./analyzeArray')

test('works with small arrays', () => {
  expect(analyzeArray([1, 8, 3])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 3,
  })
})
test('works with larger arrays', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  })
})
test('works with negative numbers', () => {
  expect(analyzeArray([-1, -8, -3, -4, -2, -6])).toEqual({
    average: -4,
    min: -8,
    max: -1,
    length: 6,
  })
})
test('works with empty array', () => {
  expect(analyzeArray([])).toEqual('Error. Empty array')
})
test('works with single item array', () => {
  expect(analyzeArray([4])).toEqual({
    average: 4,
    min: 4,
    max: 4,
    length: 1,
  })
})
