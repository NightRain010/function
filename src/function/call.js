function call(fn, obj, ...args) {
  obj.fn = fn;
  let res = obj.fn(...args);
  delete obj.fn;
  return res;
}