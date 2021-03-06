const {expect, fixtures, memo, sinon} = require('./spec-helper')

const Blizzardry = require('../lib')

describe('Blizzardry', function() {

  it('exposes restructure', function() {
    expect(Blizzardry.restructure).to.eq(require('../lib/restructure'))
    expect(Blizzardry.restructure).to.eq(require('restructure'))
  })

})
