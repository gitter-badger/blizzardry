'use strict';

var r = require('restructure');
var Entity = require('../entity');
var LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  itemIDs: new r.Array(r.uint32le, 8),
  description: LocalizedStringRef });