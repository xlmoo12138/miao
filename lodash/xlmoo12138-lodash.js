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

  fill: function() {},
}
