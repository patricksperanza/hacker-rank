// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

function sockMerchant(n, arr) {
  const map = {}
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = (map[arr[i]] || 0) + 1
  }

  let pairs = 0
  for (let sock in map) {
    pairs += Math.floor(map[sock] / 2)
  }

  return pairs
}
