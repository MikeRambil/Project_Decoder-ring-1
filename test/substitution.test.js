// Write your tests here!
const expect = require('chai').expect;
const { substitution } = require('../src/substitution.js')

describe('Substitution Cipher', function() {
    it('should return false for alphabet not of length 26', function() {
        expect(substitution('message', 'abc')).to.be.false;
    });

    it('should correctly translate the phrase based on the alphabet', function() {
        expect(substitution('message', 'plmoknijbuhvygctfxrdzeswaq')).to.equal('ykrrpik');
    });

    it('should return false for duplicate characters in the alphabet', function() {
        expect(substitution('message', 'abcdefghijklmnopqrstuvwxyzz')).to.be.false;
    });

    it('should maintain spaces', function() {
        expect(substitution('Hello World', 'plmoknijbuhvygctfxrdzeswaq')).to.equal('jkvvc scxvo');
    });

    it('should ignore capitalization', function() {
        expect(substitution('A Message', 'plmoknijbuhvygctfxrdzeswaq')).to.equal(substitution('a message', 'plmoknijbuhvygctfxrdzeswaq'));
    });
});