// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }

    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const inputLower = input.toLowerCase();
    let result = "";

    // Check if the alphabet contains unique characters
    const seenChars = new Set();
    for (let char of alphabet) {
      if (seenChars.has(char)) {
        return false; // Return false if duplicate character is found
      }
      seenChars.add(char);
    }

    if (encode) {
      for (let char of inputLower) {
        if (char === " ") {
          result += " ";
        } else {
          const index = standardAlphabet.indexOf(char);
          result += index !== -1 ? alphabet[index] : char;
        }
      }
    } else {
      for (let char of inputLower) {
        if (char === " ") {
          result += " ";
        } else {
          const index = alphabet.indexOf(char);
          result += index !== -1 ? standardAlphabet[index] : char;
        }
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

