function analyzeArray(array) {
  if (array.length === 0) {
    return 'Error. Empty array'
  }
  return {
    average: calcAverage(array),
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  }
}
function calcAverage(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  let avg = sum / array.length
  return avg
}

module.exports = analyzeArray
