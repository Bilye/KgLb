const expect = require('chai').expect
const {KgtoLb} = require('..')
const {LbtoKg} = require('..')

describe('#kglb', function(){
    it('De kilogramos a libras', function(){
        const conversion = KgtoLb(6)
        expect(conversion).to.equal(13.2)
    })
    it('De libras a kilogramos', function(){
        const conversion = LbtoKg(5)
        expect(conversion).to.equal(2.3)
    })
})