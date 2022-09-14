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
}
