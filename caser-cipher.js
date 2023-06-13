function caesarCipher(s, k) {
  const lower = "abcdefghijklmnopqrstuvwxyz"
  const upper = lower.toUpperCase()

  let res = ""
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (lower.includes(char)) {
      let index = lower.indexOf(char) + k
      if (index > 25) index = index % 26
      res += lower[index]
    } else if (upper.includes(char)) {
      let index = upper.indexOf(char) + k
      if (index > 25) index = index % 26
      res += upper[index]
    } else {
      res += char
    }
  }
  return res
}
