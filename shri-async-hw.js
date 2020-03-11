(() => {

  const _wrap = (fn, cb) => {
      setTimeout(() => { 
          cb(fn());
      }, Math.random() * 20);
  };
  
  const AsyncArray = function(initial) {
      if (initial && !(initial instanceof Array)) {
          throw new Error('initial value is not an array');
      }
  
      const a = initial ? Array.from(initial) : [];
  
      this.set = (index, value, cb) => _wrap(() => { a[index] = value }, cb);
      this.push = (value, cb) => _wrap(() => { a.push(value) }, cb);
  
      this.get = (index, cb) => _wrap(() => a[index], cb);
      this.pop = (cb) => _wrap(() => a.pop(), cb);
      this.length = (cb) => _wrap(() => a.length, cb);

      this.print = () => { console.log(a.toString()); };
  }
  
  const add = (a, b, cb) => _wrap(() => a + b, cb);
  const subtract = (a, b, cb) => _wrap(() => a - b, cb);
  const multiply = (a, b, cb) => _wrap(() => a * b, cb);
  const divide = (a, b, cb) => _wrap(() => a / b, cb);
  const mod = (a, b, cb) => _wrap(() => a % b, cb);

  const less = (a, b, cb) => _wrap(() => a < b, cb);
  const equal = (a, b, cb) => _wrap(() => a == b, cb);
  const lessOrEqual = (a, b, cb) => _wrap(() => a <= b, cb);
  const sqrt = (x, cb) => _wrap(() => Math.sqrt(x), cb);

  window.Homework = {
      AsyncArray,
      add,
      subtract,
      multiply,
      divide,
      mod,
      less,
      equal,
      lessOrEqual,
      sqrt
  };

  Object.freeze(window.Homework);
})();

