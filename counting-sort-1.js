// Given a list of integers, count and return the number of times each value appears as an array of integers.

// Function Description

// Complete the countingSort function in the editor below.

// countingSort has the following parameter(s):

// arr[n]: an array of integers
// Returns

// int[100]: a frequency array

function countingSort(arr) {
  let freq = []
  for (let i = 0; i < 100; i++) {
    freq.push(0)
  }

  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]] += 1
  }
  return freq
}
