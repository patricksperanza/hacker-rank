// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
  let pos = 0
  let neg = 0
  let z = 0

  for (let num of arr) {
    if (num > 0) {
      pos++
    } else if (num < 0) {
      neg++
    } else {
      z++
    }
  }

  console.log((pos / arr.length).toFixed(6))
  console.log((neg / arr.length).toFixed(6))
  console.log((z / arr.length).toFixed(6))
}
