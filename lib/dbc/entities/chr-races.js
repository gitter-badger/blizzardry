'use strict';

var r = require('restructure');
var Entity = require('../entity');
var LocalizedStringRef = require('../localized-string-ref');
var StringRef = require('../string-ref');

module.exports = Entity({
  id: r.uint32le,
  flags: r.uint32le,

  factionID: r.uint32le,
  explorationSoundID: r.uint32le,
  maleDisplayID: r.uint32le,
  femaleDisplayID: r.uint32le,

  clientPrefix: StringRef,

  skip: new r.Reserved(r.uint32le),

  baseLanguage: r.uint32le,
  resSicknessSpellID: r.uint32le,
  splashSoundID: r.uint32le,
  clientFileString: StringRef,
  cinematicSequenceID: r.uint32le,

  name: LocalizedStringRef,
  nameFemale: LocalizedStringRef,
  nameMale: LocalizedStringRef,

  facialHairCustomization: StringRef,
  facialHairCustomization2: StringRef,
  hairCustomization: StringRef,

  expansionID: r.uint32le
});