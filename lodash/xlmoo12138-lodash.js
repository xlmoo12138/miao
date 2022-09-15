var xlmoo12138 = {
  chunk: function (ary, size = 1) {
    var result = []

    var count = 0
    var temp = []
    for (var i = 0; i < ary.length; i++) {
      temp.push(ary[i])
      count++
      if (count == size || i == ary.length - 1) {
        result.push(temp)
        count = 0
        temp = []
      }
    }
    return result
  },

  compact: function (ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (ary[i]) {
        result.push(ary[i])
      }
    }
    return result
  },
  difference: function (ary, ...ans) {
    var result = []

    var map = {}

    for (var i = 0; i < ans.length; i++) {
      for (var j = 0; j < ans[i].length; j++) {
        var num = ans[i][j]
        if (!map[num]) {
          map[num] = 0
        }
        map[num]++
      }
    }

    for (var i = 0; i < ary.length; i++) {
      var a = ary[i]
      if (!(a in map)) {
        result.push(a)
      }
    }

    return result
  },
  differenceBy: function() {},

  fill: function (ary, value, start = 0, end = ary.length) {
    for (var i = start; i < end; i++) {
      ary[i] = value
    }
    return ary
  },
  concat: function (ary, ...values) {
    var result = []

    for (var i = 0; i < ary.length; i++) {
      result.push(ary[i])
    }

    var ans = values
    for (var i = 0; i < ans.length; i++) {
      if (!Array.isArray(ans[i])) {
        result.push(ans[i])
      } else {
        for (var j = 0; j < ans[i].length; j++) {
          result.push(ans[i][j])
        }
      }
    }

    return result
  },
  drop: function (ary, n = 1) {
    var result = ary.slice()

    for (var i = 1; i <= n; ++i) {
      result.shift()
    }
    return result
  },
  dropRight: function (ary, n = 1) {
    var result = ary.slice()

    for (var i = 1; i <= n; ++i) {
      result.pop()
    }
    return result
  },
  dropRightWhile: function (ary, predicate) {

  },
  head: function (ary) {
    return ary[0]
  },
  findIndex: function (ary, predicate, fromIndex = 0) {
    if (Array.isArray(predicate)) {
      for (var i = fromIndex; i < ary.length; i++) {
        if (ary[i][predicate[0]] === predicate[1]) {
          return i
        }
      }
    }
    if (typeof predicate == 'object') {
      for (var i = fromIndex; i < ary.length; i++) {
        var flag = false
        for (var key in predicate) {
          if (ary[i][key] == predicate[key]) {
            continue
          } else {
            flag = true
          }
        }
        if (!flag) {
          return i
        }
      }
    }
    var s = predicate
    if (typeof s == 'string') {
      predicate = it => it[s]
    }

    for (var i = fromIndex; i < ary.length; i++) {
      if (predicate(ary[i], i, ary)) {
        return i
      }
    }
    return -1
  },
  flatten: function (ary) {
    var result = []

    for (var i = 0; i < ary.length; ++i) {
      if (Array.isArray(ary[i])) {
        for (var j = 0; j < ary[i].length; ++j) {
          result.push(ary[i][j])
        }
      } else {
        result.push(ary[i])
      }
    }
    return result
  },
  flattenDeep: function flattenDeep(ary) {
    var result = []

    for (var i = 0; i < ary.length; i++) {
      if (Array.isArray(ary[i])) {
        result = result.concat( flattenDeep(ary[i]) )
      } else {
        result = result.concat(ary[i])
      }
    }
    return result
  },
  flattenDepth: function flattenDepth(ary, depth = 1) {
    var result = []

    for (var i = 0; i < ary.length; ++i) {
      if (Array.isArray(ary[i]) && depth > 0) {
        result = result.concat( flattenDepth(ary[i], --depth))
      } else {
        result.push(ary[i])
      }
    }
    return result
  },
  join: function (ary, separator = ',') {
    var str = ''

    for (var i = 0; i < ary.length; ++i) {
      str += ary[i]
      if (i < ary.length - 1) {
        str += separator
      }
    }
    return str
  },
  last: function (ary) {
    return ary.at(-1)
  },
  lastIndexOf: function (ary, value, fromIndex = ary.length - 1) {

    for (var i = fromIndex; i >= 0; i--) {
      if (ary[i] === value) {
        return i
      }
    }
    return -1
  },
  nth: function (ary, n = 0) {
    var len = ary.length

    if (n < 0) {
      n = n + len
    }
    return ary[n]
  },
  pull: function (ary, ...values) {
    for (var i = 0; i < ary.length; ++i) {
      if (values.includes(ary[i])) {
        ary.splice(i, 1)
        i--
      }
    }
    return ary
  },
  pullAll: function (ary, values) {
    for (var i = 0; i < ary.length; ++i) {
      if (values.includes(ary[i])) {
        ary.splice(i, 1)
        i--
      }
    }
    return ary
  },
  findLastIndex: function (ary, predicate, fromIndex = ary.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (typeof predicate === 'function') {
        if (predicate(ary[i])) {
          return i
        }
      }
      if (Array.isArray(predicate)) {
        if (ary[i][predicate[0]] == predicate[1]) {
          return i
        }
      }
      if (typeof predicate === 'object') {
        var flag = false
        for (let key in predicate) {
          if (ary[i][key] != predicate[key]) {
            flag = true
          }
        }
        if (!flag) {
          return i
        }
      }
      if (typeof predicate === 'string') {
        if (ary[i][predicate]) {
          return i
        }
      }
    }
  },
  fromPairs: function (pairs) {
    var map = {}

    for (var i = 0; i < pairs.length; i++) {
      var ans = pairs[i]
      for (var j = 0; j < ans.length - 1; j++) {
        map[ans[j]] = ans[j + 1]
      }
    }
    return map
  },
  indexOf: function (ary, value, fromIndex = 0) {
    for (var i = fromIndex; i < ary.length; i++) {
      if (ary[i] === value) {
        return i
      }
    }
    return -1
  },
  initial: function (ary) {
    ary.pop()
    return ary
  },
  intersection: function (...arys) {
    var map = {}
    var result = []

    for (var i = 0; i < arys.length; i++) {
      for (var j = 0; j < arys[i].length; j++) {
        var num = arys[i][j]
        if (!(num in map)) {
          map[num] = 0
        }
        map[num]++
      }
    }

    for (var key in map) {
      if (map[key] === arys.length) {
        result.push(+key)
      }
    }
    return result
  },
  reverse: function (ary) {
    var stop = Math.floor(ary.length / 2)

    for (var i = 0; i < stop; i++) {
      var j = ary.length - i - 1
      var num = ary[j]
      ary[j] = ary[i]
      ary[i] = num
    }
    return ary
  },
  sortedIndex: function (ary, value) {
    var l = 0, r = ary.length - 1

    while (l <= r) {
      let mid = Math.floor((l + r) / 2)
      let num = ary[mid]

      if (num < value) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
    return l
  },
}
