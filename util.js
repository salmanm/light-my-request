/**
 * This is needed for express as it replaces our res's proto.
 * https://github.com/expressjs/express/blob/master/lib/middleware/init.js#L36
 * Which is why we loose our overridden prototype methods.
 * This function ensures that those remain intact.
 *
 * @param instance
 */
function fixProto (instance) {
  Object.keys(Object.getPrototypeOf(instance)).forEach((method) => {
    Object.defineProperty(instance, method, {
      writable: false,
      configurable: false,
      readable: true,
      value: instance[method]
    })
  })
}

module.exports = fixProto
