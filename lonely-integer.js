// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {
  // Write your code here
  const map = {}
  for (let i = 0; i < a.length; i++) {
    map[a[i]] = (map[a[i]] || 0) + 1
  }

  for (let num in map) {
    if (map[num] === 1) return num
  }
}
