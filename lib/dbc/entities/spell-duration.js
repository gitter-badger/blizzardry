'use strict';

var r = require('restructure');
var Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  baseDuration: r.uint32le,
  perLevel: r.uint32le,
  maxDuration: r.uint32le
});