// http://2ality.com/2018/08/enums-via-proxies.html
export default const keyProxy = new Proxy({}, {
  get(_target, propKey, _receiver) {
    return Symbol(propKey); // (A)
  }
});
