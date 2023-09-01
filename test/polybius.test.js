// Write your tests here!
const expect = require('chai').expect;
const { polybius } = require('../src/polybius.js')

describe('Polybius Square', function() {
    it('should encode i and j to 42', function() {
        expect(polybius('message')).to.equal('23513434112251');
    });

    it('should decode 42 to i/j', function() {
        expect(polybius('4432423352125413', false)).to.equal('th(i/j)nkful'); // solved
    });
//solved
    it('should ignore capitalization', function() {
        expect(polybius('A Message')).to.equal(polybius('a message'));
        expect(polybius('A Message')).to.equal(polybius('a message'));
    });

    it('should maintain spaces', function() {
        expect(polybius('Hello World')).to.equal('3251131343 2543241341');
        expect(polybius('3251131343 2543241341', false)).to.equal('hello world');
    });
});