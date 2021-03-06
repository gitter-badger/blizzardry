'use strict';

var r = require('restructure');
var Chunk = require('../chunked/chunk');
var Chunked = require('../chunked');
var SkipChunk = require('../chunked/skip-chunk');

var _require = require('../types');

var Vec3Float = _require.Vec3Float;

var MHDR = Chunk({
  flags: r.uint32le,

  offsetMCIN: r.uint32le,
  offsetMTEX: r.uint32le,
  offsetMMDX: r.uint32le,
  offsetMMID: r.uint32le,
  offsetMWMO: r.uint32le,
  offsetMWID: r.uint32le,
  offsetMDDF: r.uint32le,
  offsetMODF: r.uint32le,
  offsetMFBO: r.uint32le,
  offsetMH2O: r.uint32le,
  offsetMCNKs: r.uint32le,
  offsetMTXF: r.uint32le,
  offsetMTXP: r.uint32le,

  skip: new r.Reserved(r.uint32le, 2)
});

var MTEX = Chunk({
  filenames: new r.Array(new r.String(null), 'size', 'bytes')
});

var MMDX = Chunk({
  filenames: new r.Array(new r.String(null), 'size', 'bytes')
});

var MCVT = Chunk({
  heights: new r.Array(r.floatle, 145)
});

var MCNR = Chunk({
  normals: new r.Array(new r.Struct({
    x: r.int8,
    z: r.int8,
    y: r.int8
  }), 145),
  skip: new r.Reserved(r.uint8, 13)
});

var MCLY = Chunk({
  layers: new r.Array(new r.Struct({
    textureID: r.uint32le,
    offsetMCAL: r.uint32le,
    skip: r.uint32le,
    skip2: r.int32le
  }), 'size', 'bytes')
});

var MCNK = Chunk({
  flags: r.uint32le,
  indexX: r.uint32le,
  indexY: r.uint32le,
  layerCount: r.uint32le,
  doodadRefs: r.uint32le,
  offsetMCVT: r.uint32le,
  offsetMCNR: r.uint32le,
  offsetMCLY: r.uint32le,
  offsetMCRF: r.uint32le,
  offsetMCAL: r.uint32le,
  sizeAlpha: r.uint32le,
  offsetMCSH: r.uint32le,
  sizeShadow: r.uint32le,
  areaID: r.uint32le,
  mapObjRefCount: r.uint32le,
  holes: r.uint32le,

  textureMaps: new r.Reserved(r.uint16le, 8),

  predTex: r.uint32le,
  noEffectDoodad: r.uint32le,
  offsetMCSE: r.uint32le,
  soundEmittersCount: r.uint32le,
  offsetMCLQ: r.uint32le,
  sizeLiquid: r.uint32le,
  position: Vec3Float,
  offsetMCCV: r.uint32le,

  skip: new r.Reserved(r.uint32le, 2),

  MCVT: MCVT,
  MCCV: new r.Optional(SkipChunk, function () {
    return this.offsetMCCV;
  }),
  MCNR: MCNR,
  MCLY: MCLY,
  MCRF: SkipChunk,
  MCSH: SkipChunk,
  MCAL: SkipChunk,
  MLCQ: new r.Optional(SkipChunk, function () {
    return this.offsetMCLQ;
  }),
  MCSE: SkipChunk
});

module.exports = Chunked({
  MHDR: MHDR,
  MCIN: SkipChunk,
  MTEX: MTEX,
  MMDX: MMDX,
  MMID: SkipChunk,
  MWMO: require('../chunked/mwmo'),
  MWID: SkipChunk,
  MDDF: SkipChunk,
  MODF: SkipChunk,
  MH2O: new r.Optional(SkipChunk, function () {
    return this.MHDR.offsetMH2O;
  }),
  MCNKs: new r.Array(MCNK, 256),
  MFBO: new r.Optional(SkipChunk, function () {
    return this.MHDR.offsetMFBO;
  }),
  MTXF: new r.Optional(SkipChunk, function () {
    return this.MHDR.offsetMTXF;
  }),
  MTXP: new r.Optional(SkipChunk, function () {
    return this.MHDR.offsetMTXP;
  }),

  flags: function flags() {
    return this.MHDR.flags;
  }
});