'use strict';

var r = require('restructure');
var Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  costHonor: r.uint32le,
  costArena: r.uint32le,
  itemIDs: new r.Array(r.uint32le, 5),
  itemCounts: new r.Array(r.uint32le, 5),
  personalRating: r.uint32le,
  purchaseGroupID: r.uint32le,
  unknown: new r.Reserved(r.uint32le)
});