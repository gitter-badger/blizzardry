'use strict';

var r = require('restructure');
var Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  type: r.uint32le,
  direction: r.uint32le,
  amplitude: r.floatle,
  frequency: r.floatle,
  duration: r.floatle,
  phase: r.floatle,
  coefficient: r.floatle
});