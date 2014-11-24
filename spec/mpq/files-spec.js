var File, MPQ, expect, fixtures, memo, sinon, _ref;

_ref = require('../spec-helper'), expect = _ref.expect, fixtures = _ref.fixtures, memo = _ref.memo, sinon = _ref.sinon;

File = require('../../lib/mpq/file');

MPQ = require('../../lib/mpq');

describe('MPQ#files', function() {
  var dummy;
  dummy = memo().is(function() {
    return MPQ.open(fixtures + 'dummy.w3m').files;
  });
  describe('#contains', function() {
    context('when archive contains given file', function() {
      return it('returns true', function() {
        var presence;
        presence = dummy().contains('(listfile)');
        return expect(presence).to.be["true"];
      });
    });
    return context('when archive does not contain given file', function() {
      return it('returns false', function() {
        var presence;
        presence = dummy().contains('non-existent.txt');
        return expect(presence).to.be["false"];
      });
    });
  });
  return describe('#get', function() {
    context('when archive contains given file', function() {
      return it('returns file instance', function() {
        var file;
        file = dummy().get('(listfile)');
        return expect(file).to.be.an["instanceof"](File);
      });
    });
    return context('when archive does not contain given file', function() {
      return it('returns null', function() {
        var result;
        result = dummy().get('non-existent.txt');
        return expect(result).to.be["null"];
      });
    });
  });
});