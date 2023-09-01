// Write your tests here!
const expect = require('chai').expect;
const { caesar } = require('../src/caesar.js')

describe('Caesar Shift', function() {
    it('should return false for invalid shift values', function() {
        expect(caesar('Hello', 0)).to.be.false;
        expect(caesar('World', -30)).to.be.false;
        expect(caesar('Test', 26)).to.be.false;
        expect(caesar('Example')).to.be.false;
    });

    it('should ignore capitalization', function() {
        expect(caesar('A Message', 3)).to.equal(caesar('a message', 3));
    });

    it('should handle shifts wrapping around the alphabet', function() {
        expect(caesar('z', 3)).to.equal('c');
    });

    it('should preserve non-alphabetic characters', function() {
        expect(caesar('Hello, world!', 5)).to.equal('mjqqt, btwqi!');
    });
});