const r = require('restructure')

module.exports = class Nofs {

  constructor(type, length) {
    this.type = type
    this.length = length
  }

  decode(stream, parent) {
    var length = r.uint32le.decode(stream)
    if(typeof this.length == 'function') {
      length = this.length.call(null, length)
    }

    if(this.type) {
      const pointer = new r.Pointer(r.uint32le, new r.Array(this.type, length), 'global')
      return pointer.decode(stream, parent)
    } else {
      r.uint32le.decode(stream)
      return length
    }
  }

}
