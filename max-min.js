function maxMin(k, arr) {
  arr.sort((a, b) => a - b)
  let unfairness = Math.max(...arr)
  for (let i = 0; i < arr.length - k + 1; i++) {
    let sample = arr.slice(i, i + k)
    unfairness = Math.min(unfairness, sample[k - 1] - sample[0])
  }
  return unfairness
}
