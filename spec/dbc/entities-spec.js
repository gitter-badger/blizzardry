var DBC, expect, fixtures, memo, sinon, _ref;

_ref = require('../spec-helper'), expect = _ref.expect, fixtures = _ref.fixtures, memo = _ref.memo, sinon = _ref.sinon;

DBC = require('../../lib/dbc/entities');

describe('DBC.Entities', function() {
  var entity;
  entity = function(name) {
    return require("../../lib/dbc/entities/" + name);
  };
  it('exposes Achievement entity', function() {
    return expect(DBC.Achievement).to.eq(entity('achievement'));
  });
  it('exposes Achievement_Category entity', function() {
    return expect(DBC.Achievement_Category).to.eq(entity('achievement-category'));
  });
  it('exposes Achievement_Criteria entity', function() {
    return expect(DBC.Achievement_Criteria).to.eq(entity('achievement-criteria'));
  });
  it('exposes AnimationData entity', function() {
    return expect(DBC.AnimationData).to.eq(entity('animation-data'));
  });
  it('exposes AreaGroup entity', function() {
    return expect(DBC.AreaGroup).to.eq(entity('area-group'));
  });
  it('exposes AreaPOI entity', function() {
    return expect(DBC.AreaPOI).to.eq(entity('area-poi'));
  });
  it('exposes AreaTable entity', function() {
    return expect(DBC.AreaTable).to.eq(entity('area-table'));
  });
  it('exposes AreaTrigger entity', function() {
    return expect(DBC.AreaTrigger).to.eq(entity('area-trigger'));
  });
  it('exposes AttackAnimKits entity', function() {
    return expect(DBC.AttackAnimKits).to.eq(entity('attack-anim-kits'));
  });
  it('exposes AttackAnimTypes entity', function() {
    return expect(DBC.AttackAnimTypes).to.eq(entity('attack-anim-types'));
  });
  it('exposes AuctionHouse entity', function() {
    return expect(DBC.AuctionHouse).to.eq(entity('auction-house'));
  });
  it('exposes BankBagSlotPrices entity', function() {
    return expect(DBC.BankBagSlotPrices).to.eq(entity('bank-bag-slot-prices'));
  });
  it('exposes BannedAddOns entity', function() {
    return expect(DBC.BannedAddOns).to.eq(entity('banned-add-ons'));
  });
  it('exposes BarberShopStyle entity', function() {
    return expect(DBC.BarberShopStyle).to.eq(entity('barber-shop-style'));
  });
  it('exposes BattlemasterList entity', function() {
    return expect(DBC.BattlemasterList).to.eq(entity('battlemaster-list'));
  });
  it('exposes CameraShakes entity', function() {
    return expect(DBC.CameraShakes).to.eq(entity('camera-shakes'));
  });
  it('exposes Cfg_Categories entity', function() {
    return expect(DBC.Cfg_Categories).to.eq(entity('cfg-categories'));
  });
  it('exposes Cfg_Configs entity', function() {
    return expect(DBC.Cfg_Configs).to.eq(entity('cfg-configs'));
  });
  it('exposes CharBaseInfo entity', function() {
    return expect(DBC.CharBaseInfo).to.eq(entity('char-base-info'));
  });
  it('exposes ChrClasses entity', function() {
    return expect(DBC.ChrClasses).to.eq(entity('chr-classes'));
  });
  it('exposes ChrRaces entity', function() {
    return expect(DBC.ChrRaces).to.eq(entity('chr-races'));
  });
  it('exposes CreatureDisplayInfo entity', function() {
    return expect(DBC.CreatureDisplayInfo).to.eq(entity('creature-display-info'));
  });
  it('exposes CreatureModelData entity', function() {
    return expect(DBC.CreatureModelData).to.eq(entity('creature-model-data'));
  });
  it('exposes Faction entity', function() {
    return expect(DBC.Faction).to.eq(entity('faction'));
  });
  return it('exposes Map entity', function() {
    return expect(DBC.Map).to.eq(entity('map'));
  });
});
