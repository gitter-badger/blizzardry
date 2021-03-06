'use strict';

var r = require('restructure');
var Entity = require('../entity');
var StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  type: r.uint32le,

  name: StringRef,
  filenames: new r.Array(StringRef, 10),
  unknowns: new r.Reserved(StringRef, 10),
  path: StringRef,

  volume: r.floatle,
  flags: r.uint32le,
  minDistance: r.floatle,
  distanceCutOff: r.floatle,
  eaxDef: r.uint32le,
  advancedID: r.uint32le
});