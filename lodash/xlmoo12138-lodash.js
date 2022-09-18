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
    if (Array.isArray(predicate)) {
      for (var i = fromIndex; i < ary.length; i++) {
        if (ary[i][predicate[0]] === predicate[1]) {
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
      if (typeof predicate == 'object' && !Array.isArray(predicate)) {
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
  sortedIndexOf: function (ary, value) {
    var l = 0, r = ary.length - 1
    var flag = false

    while (l <= r) {
      let mid = Math.floor((l + r) / 2)
      let num = ary[mid]

      if (num > value) {
        r = mid - 1
      } else if (num < value){
        l = mid + 1
      } else {
        flag = true
        r = mid - 1
      }
    }
    return flag ? l : -1
  },
  sortedLastIndex: function (ary, value) {
    var l = 0, r = ary.length - 1

    while (l <= r) {
      let mid = Math.floor((l + r) / 2)
      let num = ary[mid]

      if (num <= value) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
    return l
  },
  sortedLastIndexOf: function (ary, value) {
    var l = 0, r = ary.length - 1
    var flag = false

    while (l <= r) {
      let mid = Math.floor((l + r) / 2)
      let num = ary[mid]

      if (num > value) {
        r = mid - 1
      } else if (num < value){
        l = mid + 1
      } else {
        flag = true
        l = mid + 1
      }
    }
    return flag ? l - 1 : -1
  },
  sortedUniq: function (ary) {
   /*  var map = {}

    for (var i = 0; i < ary.length; i++) {
      var num = ary[i]
      if (!(num in map)) {
        map[num] = 0
      }
    }
    var result = []
    for (var key in map) {
      result.push(+key)
    }
    return result */
    var result = []

    for (var i = 0; i < ary.length; i++) {
      if (result.indexOf(ary[i]) === -1) {
        result.push(ary[i])
      }
    }
    return result
  },
  sortedUniqBy: function (ary, iteratee) {
    var temp = []
    var res = []

    for (var i = 0; i < ary.length; i++) {
      let num = iteratee(ary[i])
      if (temp.indexOf(num) === -1) {
        temp.push(num)
        res.push(ary[i])
      }
    }
    return res
  },
  tail: function (ary) {
    ary.shift()
    return ary
  },
  take: function (ary, n = 1) {
    if (n >= ary.length) return ary

    var result = []

    for (var i = 0; i < n; i++) {
      result.push(ary[i])
    }
    return result
  },
  takeRight: function (ary, n = 1) {
    if (n >= ary.length) return ary

    var result = []

    for (var i = 0; i < n; i++) {
      result.unshift(ary.pop())
    }
    return result
  },
  union: function (...arys) {
    var result = []

    for (var i = 0; i < arys.length; i++) {
      var ans = arys[i]
      for (var j = 0; j < ans.length; j++) {
        if (result.indexOf(arys[i][j]) === -1) {
          result.push(arys[i][j])
        }
      }
    }
    return result
  },
  unionBy: function (...arys) {
    var temp = []
    var result = []
    var predicate = arys[arys.length - 1]

    for (var i = 0; i < arys.length - 1; i++) {
      var ans = arys[i]
      for (var j = 0; j < ans.length; j++) {
        if (typeof predicate == 'function') {
          var num = predicate(arys[i][j])
        }
        if (typeof predicate == 'string') {
          var num = arys[i][j][predicate]
        }
        if (temp.indexOf(num) === -1) {
          temp.push(num)
          result.push(arys[i][j])
        }
      }
    }
    return result
  },
  uniq: function (ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
      if (result.indexOf(ary[i]) == -1) {
        result.push(ary[i])
      }
    }
    return result
  },
  uniqBy: function (ary, iteratee) {
    var temp = []
    var res = []

    for (var i = 0; i < ary.length; i++) {
      if (typeof iteratee == 'function') {
        var num = iteratee(ary[i])
      }
      if (typeof iteratee == 'string') {
        var num = ary[i][iteratee]
      }

      if (temp.indexOf(num) == -1) {
        temp.push(num)
        res.push(ary[i])
      }
    }
    return res
  },
  unzip: function (arys) {
    var result = []
    var temp = []

    var len1 = arys.length
    var len2 = arys[0].length

    for (var i = 0; i < len2; i++) {
      for (var j = 0; j < len1; j++) {
        temp.push(arys[j][i])
      }
      result.push(temp.slice()) // 不能直接传入temp
      temp = []
    }
    return result
  },
  without: function (arys, ...values) {
    var result = []

    for (var i = 0; i < arys.length; i++) {
      if (values.indexOf(arys[i]) == -1) {
        result.push(arys[i])
      }
    }
    return result
  },
  xor: function (...arys) {
    var result = []
    var map = {}

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
      if (map[key] === 1) {
        result.push(+key)
      }
    }

    return result
  },
  zip: function (...arys) {
    var result = []
    var temp = []

    var len1 = arys.length
    var len2 = arys[0].length

    for (var i = 0; i < len2; i++) {
      for (var j = 0; j < len1; j++) {
        temp.push(arys[j][i])
      }
      result.push(temp.slice()) // 不能直接传入temp
      temp = []
    }
    return result
  },
  countBy: function (ary, predicate) {
    var n = ary.length
    var map = {}

    for (var i = 0; i < n; i++) {
      if (typeof predicate == 'function') {
        var num = predicate(ary[i])
      }
      if (typeof predicate == 'string') {
        var num = 0
        for (var j = 0; j < ary[i].length; j++) {
          num++
        }
      }

      if (!(num in map)) {
        map[num] = 0
      }
      map[num]++
    }
    return map
  },
  every: function (ary, predicate) {
    if (typeof predicate == 'object' && !Array.isArray(predicate)) {
      for (var i = 0; i < ary.length; i++) {
        for (var key in predicate) {
          if (ary[i][key] != predicate[key]) {
            return false
          }
        }
      }
    }

    if (Array.isArray(predicate)) {
      for (var i = 0; i < ary.length; i++) {
        let num = ary[i]
        if (num[predicate[0]] != predicate[1]) {
          return false
        }
      }
    }

    if (typeof predicate == 'string') {
      for (var i = 0; i < ary.length; i++) {
        let num = ary[i]
        if (!num[predicate]) {
          return false
        }
      }
    }


    if (typeof predicate == 'function') {
      for (var i = 0; i < ary.length; i++) {
        if (typeof ary[i] != predicate) {
          return false
        }
      }
    }

    return true
  },
  filter: function (clc, predicate) {
    let n = clc.length
    let res = []
    
    for (var i = 0; i < n; i++) {
      let tmp = clc[i]
      if (Array.isArray(predicate)) {
        if (tmp[predicate[0]] == predicate[1]) {
          res.push(tmp)
        }
      }
      if (typeof predicate == 'string') {
        if (tmp[predicate]) {
          res.push(tmp)
        }
      }
      if (typeof predicate == 'function') {
        if (predicate(tmp)) {
          res.push(tmp)
        }
      }
      if (typeof predicate == 'object') {
        let flag = false
        for (var key in predicate) {
          if (tmp[key] != predicate[key]) {
            flag = true
          }
        }
        if (!flag) {
          res.push(tmp)
        }
      }
    }
    return res
  },
  times: function (n, iteratee = identity) {
    let res = []
    for (var i = 0; i < n; i++) {
      res.push(iteratee(i))
    }
    return res
  },
  identity: function (value) {
    return value
  },
}
