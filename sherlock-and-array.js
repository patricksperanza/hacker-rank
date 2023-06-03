function balancedSums(arr) {
  let left = 0
  let right = arr.reduce((a, c) => a + c, 0)

  for (let num of arr) {
    right -= num
    if (left === right) return "YES"
    left += num
  }
  return "NO"
}
