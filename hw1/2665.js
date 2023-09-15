// 2665. Counter II

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let currentValue = init;

  return {
    increment: function () {
      currentValue++;
      return currentValue;
    },
    decrement: function () {
      currentValue--;
      return currentValue;
    },
    reset: function () {
      currentValue = init;
      return currentValue;
    },
  };
};
