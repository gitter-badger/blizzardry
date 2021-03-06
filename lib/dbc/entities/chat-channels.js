'use strict';

var r = require('restructure');
var Entity = require('../entity');
var LocalizedStringRef = require('../localized-string-ref');

module.exports = Entity({
  id: r.uint32le,
  flags: r.uint32le,
  factionGroup: r.uint32le,
  name: LocalizedStringRef,
  shortcut: LocalizedStringRef
});