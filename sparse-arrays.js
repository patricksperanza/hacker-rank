// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

function matchingStringsBruteForce(strings, queries) {
  let result = []
  for (let i = 0; i < queries.length; i++) {
    let n = 0
    for (let j = 0; j < strings.length; j++) {
      if (queries[i] === strings[j]) n++
    }
    result.push(n)
  }
  return result
}

function matchingStringsOptimized(strings, queries) {
  let map = {}
  for (let i = 0; i < strings.length; i++) {
    map[strings[i]] = (map[strings[i]] || 0) + 1
  }

  let result = []
  for (let i = 0; i < queries.length; i++) {
    result.push(map[queries[i]] || 0)
  }

  return result
}
