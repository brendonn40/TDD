let s = "abcdefghijklmnopqrstuvwxyz";
let lower = createAlphabet(s);
let upper = createAlphabet(s.toUpperCase);
function caesarCipher(string, key) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    let char;
    if (string[i].charCodeAt(0) > 96 && string[i].charCodeAt(0) < 123) {
      char = (string[i].charCodeAt(0) - 97 + key) % 26;
      result.push(String.fromCharCode(97 + char));
    } else if (string[i].charCodeAt(0) > 64 && string[i].charCodeAt(0) < 91) {
      char = (string[i].charCodeAt(0) - 65 + key) % 26;
      result.push(String.fromCharCode(65 + char));
    } else {
      result.push(string[i]);
    }
  }
  return result.join("");
}

function createAlphabet(alpha) {
  let arr = [];
  for (let i = 0; i < alpha.length; i++) {
    let obj = {};
    obj[i] = alpha[i];
    arr.push(obj);
  }
  return arr;
}
function isCharacterALetter(char) {
  return /[a-zA-Z]/.test(char);
}
function isLowerCase(str) {
  return str == str.toLowerCase() && str != str.toUpperCase();
}
module.exports = caesarCipher;
