// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

    function polybius(input, encode = true) {

      const square = {
        'A': '11', 'B': '21', 'C': '31', 'D': '41', 'E': '51', 
        'F': '12', 'G': '22', 'H': '32', '(I/J)': '42', 'K': '52',
        'L': '13', 'M': '23', 'N': '33', 'O': '43', 'P': '53',
        'Q': '14', 'R': '24', 'S': '34', 'T': '44', 'U': '54',
        'V': '15', 'W': '25', 'X': '35', 'Y': '45', 'Z': '55', 'I':'42', 'J':'42' //extra keys are here- it works!
      };

      // here is ENCODING
      if (encode) {
        const final = input.toUpperCase().replace(/[A-Z]/g, letter => square[letter]);

        return final.toLowerCase()

      // here is DECODING
      } else {

        // --------------------------odd number check
       let lengthWithoutSpaces = 0;

      for (let char of input) {
        if (char !== ' ') {
          lengthWithoutSpaces++; 
        }
      }

      if (lengthWithoutSpaces % 2 !== 0) return false;

      let result = [];

      for (let i = 0; i < input.length; i++) {

        const char = input[i];

        if (char === ' ') {
          result.push(' ');
          continue; 
        }

        const row = input[i];
        const col = input[i+1];

        const letter = Object.keys(square).find(key => square[key] === `${row}${col}`);

        result.push(letter);

        i++; // skip 
      }

        return result.join('').toLowerCase();

      }

    }

      return {
        polybius
      };

})();

module.exports = { polybius: polybiusModule.polybius };


