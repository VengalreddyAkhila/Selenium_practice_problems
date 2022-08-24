
const chai = require('chai')
, assert = chai.assert
, expect = chai.expect
, should = chai.should();

describe('string',function(){
    let name = 'Akhila';
    it("it should be a astring",function(){
        name.should.be.a('string')
        expect(name).to.be.a('string')
        assert.typeOf(name,'string')

    })
    it.skip("it should be a Akhila",function(){
        name.should.equal('Akhila')
        expect(name).to.equal('Akhila')
        assert.equal(name,'Akhila')

    })
})