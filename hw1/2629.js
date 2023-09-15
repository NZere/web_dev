// 2629. Function Composition

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    var count = functions.length - 1;
    console.log(count);
    while (count > -1) {
      x = functions[count](x);
      console.log(x);
      count -= 1;
    }
    return x;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
